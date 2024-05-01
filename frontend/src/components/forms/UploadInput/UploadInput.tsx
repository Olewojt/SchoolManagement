import classes from "./UploadInput.module.scss"
import {AttachmentIcon, CheckIcon, DocIcon} from "assets/icons/Icon.tsx";

const UploadInput = () => {
    return (
        <div className={classes.upload}>
            <div>
                <section className={classes.load}>
                    <li className={classes.load__row}>
                        <DocIcon/>
                        <div className={classes.load__content}>
                            <div className={classes.load__details}>
                                <div className={classes.load__name}>
                                    file name
                                </div>
                                <div className={classes.load__percent}>
                                    90%
                                </div>
                                <div className={classes["load__loading-bar"]}>
                                    <div className={classes.load__loading}></div>
                                </div>
                            </div>
                        </div>
                    </li>
                </section>
                <section className={classes.uploaded}>
                    <li className={classes.uploaded__row}>
                        <DocIcon/>
                        <div className={classes.uploaded__content}>
                            <div className={classes.uploaded__details}>
                                <span className={classes.uploaded__name}>name file</span>
                                <span className={classes.uploaded__size}>size file</span>
                            </div>
                        </div>
                        <CheckIcon/>
                    </li>
                </section>
            </div>
            <form>
                <input className={classes["upload__input-file"]} type="file" name="file" hidden={true}/>
                <div className={classes["upload__btn"]}>
                    <AttachmentIcon/> &nbsp; Add attachment
                </div>
            </form>
        </div>
    )
}

export default UploadInput;