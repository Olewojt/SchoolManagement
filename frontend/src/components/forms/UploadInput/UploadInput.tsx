import classes from "./UploadInput.module.scss"
import {AttachmentIcon, CheckIcon, DocIcon} from "assets/icons/Icon.tsx";
import {ChangeEvent, useRef, useState} from "react";

const UploadInput = () => {
    const [files, setFiles] = useState<{ name: string; loading: number }[]>([]);
    const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: number }[]>([]);
    const [showProgress, setShowProgress] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileInputClick = () => {
        fileInputRef.current?.click();
    }
    const uploadedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = event.target.files?.[0];
        if (!file) return;
        const fileName = file.name.length > 12
            ? `${file.name.substring(0, 13)}... .${file.name.split(".")[1]}`
            : file.name;
        const formData = new FormData();
        formData.append("file", file);
        setFiles(prevState => [...prevState, {name: fileName, loading: 0}]);
        setShowProgress(true);
        //Tutaj będzie dla axiosa https://www.youtube.com/watch?v=u31mCmwBFS8
        setUploadedFiles(prevUploadedFiles => [...prevUploadedFiles, {name: fileName, size: 69}]);
        setFiles([])
        setShowProgress(false)
    }
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
                                                 style={{width: `${file.loading}`}}></div>
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
                        )
                    )}
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
    )
}

export default UploadInput;