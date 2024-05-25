import React, {useRef, useState, useEffect} from "react";
import {AttachmentIcon, CheckIcon, DocIcon} from "assets/icons/Icon.tsx";
import classes from "./UploadInput.module.scss";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "state/store.tsx";

interface UploadInputProps {
    task: number;
    status: string;
}

const UploadInput: React.FC<UploadInputProps> = ({task, status}) => {
    const [files, setFiles] = useState<{ name: string; loading: number; error: boolean }[]>([]);
    const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([]);
    const [showProgress, setShowProgress] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const user = useSelector((state: RootState) => state.login);

    // Fetching file details from the API
    useEffect(() => {
        const fetchUploadedFiles = async () => {
            try {
                const {data} = await axios.get(`http://localhost:8080/api/v1/attachments/all/${task}`, {
                    headers: {'Authorization': localStorage.getItem('BEARER_TOKEN')}
                });
                const filesWithSizeInMB = data.map((file: { name: string; size: number }) => ({
                    name: file.name,
                    size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
                }));
                setUploadedFiles(filesWithSizeInMB);
            } catch (err) {
                console.error("Error fetching uploaded files:", err);
            }
        };
        fetchUploadedFiles();
    }, [task]);

    const handleFileInputClick = () => fileInputRef.current?.click();

    // Handling file upload
    const uploadedFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const fileName = file.name.length > 12 ? `${file.name.substring(0, 13)}... .${file.name.split(".")[1]}` : file.name;
        setFiles([{name: fileName, loading: 0, error: false}]);
        setShowProgress(true);

        const formData = new FormData();
        formData.append("file", file);

        try {
            await axios.post(`http://localhost:8080/api/v1/attachments/upload/${task}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': localStorage.getItem('BEARER_TOKEN')
                },
                onUploadProgress: ({loaded, total}) => {
                    if (total) {
                        const percentCompleted = Math.floor((loaded / total) * 100);
                        setFiles([{name: fileName, loading: percentCompleted, error: false}]);
                    }
                }
            });

            const fileSize = (file.size / (1024 * 1024)).toFixed(2);
            setUploadedFiles(prevState => [...prevState, {name: fileName, size: `${fileSize} MB`}]);
            setFiles([]);
            setShowProgress(false);
        } catch (err) {
            console.error("Error uploading file:", err);
            setFiles([{name: fileName, loading: 0, error: true}]);
        }
    };

    return (
        <div className={classes.upload}>
            <div>
                {showProgress && (
                    <section className={classes.load}>
                        {files.map((file, index) => (
                            <li className={classes.load__row} key={index}>
                                <DocIcon/>
                                <div className={classes.load__content}>
                                    <div className={classes.load__details}>
                                        <div className={classes.load__name}>
                                            {file.error ? `${file.name} - ERROR` : `${file.name} - uploading`}
                                        </div>
                                        {!file.error && (
                                            <>
                                                <div className={classes.load__percent}>{`${file.loading}%`}</div>
                                                <div className={classes["load__loading-bar"]}>
                                                    <div className={classes.load__loading}
                                                         style={{width: `${file.loading}%`}}></div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </section>
                )}
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
            {status === "TO_DO" && user.role === "Student" &&
                <form>
                    <input
                        className={classes["upload__input-file"]}
                        type="file"
                        name="file"
                        hidden
                        ref={fileInputRef}
                        onChange={uploadedFile}
                    />
                    <div className={classes["upload__btn"]} onClick={handleFileInputClick}>
                        <AttachmentIcon/> &nbsp; Add attachment
                    </div>
                </form>
            }
        </div>
    );
};

export default UploadInput;
