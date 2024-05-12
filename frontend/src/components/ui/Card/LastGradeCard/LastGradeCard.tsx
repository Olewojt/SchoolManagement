import classes from "./LastGradeCard.module.scss"

const LastGradeCard = () => {
    return (
        <section className={classes["last-grade"]}>
            <div className={classes["lolipop"]}>
                <img className={classes["lolipop--2"]} src="src/assets/images/lolipop-icon-stick.png"/>
                <img className={classes["lolipop--1"]} src="src/assets/images/lolipop-icon-sugar.png"/>
            </div>
            <div className={classes["card"]}>
                <h3 className={classes["card__header"]}>Last grade</h3>
                <h1 className={classes["card__grade"]}>2</h1>
                <h3 className={classes["card__subject"]}>Majcuszka</h3>
                <h3 className={classes["card__date"]}>20.06.2137</h3>
            </div>
        </section>
    )
}

export default LastGradeCard;