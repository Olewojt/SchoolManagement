import React, {useRef, useState} from "react";
import {AttachmentIcon, CheckIcon, DocIcon} from "assets/icons/Icon.tsx";
import classes from "./UploadInput.module.scss";
import axios from "axios";


interface UploadInputProps {
    task: number;
}

const UploadInput: React.FC<UploadInputProps> = (props) => {
    const [files, setFiles] = useState<{ name: string; loading: number }[]>([]);
    const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: number }[]>([]);
    const [showProgress, setShowProgress] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileInputClick = () => {
        fileInputRef.current?.click();
    };

    const uploadedFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = event.target.files?.[0];
        if (!file) return;
        const fileName = file.name.length > 12
            ? `${file.name.substring(0, 13)}... .${file.name.split(".")[1]}`
            : file.name;


        // const formData = new FormData();
        // formData.append("file", file);

        console.log("DUPA")

        setFiles(prevState => [...prevState, {name: fileName, loading: 0}]);
        setShowProgress(true);

        const formData = new FormData();
        formData.append("file", file);

        const headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization': localStorage.getItem('BEARER_TOKEN')
        };

        axios.post(`http://localhost:8080/api/v1/attachments/upload/${props.task}`, formData, {
            headers: headers,
            onUploadProgress: ({ loaded, total }) => {
                const percentCompleted = Math.floor((loaded / total) * 100);
                console.log(`Upload progress: ${percentCompleted}%`);
                setFiles(prevState => {
                    const updatedFiles = [...prevState];
                    updatedFiles[updatedFiles.length - 1].loading = percentCompleted;
                    return updatedFiles;
                });
                if (loaded === total) {
                    const fileSize = total < 1024
                        ? `${total} KB`
                        : `${(loaded / (1024 * 1024)).toFixed(2)} MB`;
                    setUploadedFiles([...uploadedFiles, { name: fileName, size: fileSize }]);
                    setFiles([]);
                    setShowProgress(false);
                }
            }
        })
            .then(() => {
                console.log("File uploaded successfully");
            })
            .catch(err => {
                console.error("Error uploading file:", err);
            });

    };

    return (
        <div className={classes.upload}>
            <div>
                {showProgress &&
                    (<section className={classes.load}>
                        {files.map((file, index) => (
                            <li className={classes.load__row} key={index}>
                                <DocIcon/>
                                <div className={classes.load__content}>
                                    <div className={classes.load__details}>
                                        <div className={classes.load__name}>
                                            {`${file.name} - uploading`}
                                        </div>
                                        <div className={classes.load__percent}>
                                            {`${file.loading}%`}
                                        </div>
                                        <div className={classes["load__loading-bar"]}>
                                            <div className={classes.load__loading}
                                                 style={{width: `${file.loading}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </section>)
                }
                <section className={classes.uploaded}>
                    {uploadedFiles.map((file, index) => (
                        <li className={classes.uploaded__row} key={index}>
                            <DocIcon/>
                            <div className={classes.uploaded__content}>
                                <div className={classes.uploaded__details}>
                                    <span className={classes.uploaded__name}>{file.name}</span>
                                    <span className={classes.uploaded__size}>{file.size}</span>
                                </div>
                            </div>
                            <CheckIcon/>
                        </li>
                    ))}
                </section>
            </div>
            <form>
                <input className={classes["upload__input-file"]} type="file" name="file" hidden={true}
                       ref={fileInputRef} onChange={uploadedFile}/>
                <div className={classes["upload__btn"]} onClick={handleFileInputClick}>
                    <AttachmentIcon/> &nbsp; Add attachment
                </div>
            </form>
        </div>
    );
};

export default UploadInput;
