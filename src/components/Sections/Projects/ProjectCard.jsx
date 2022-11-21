import React from "react";
import Link from "../../UI/Links/Link";

import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ img, title, frontendLink, backendLink, liveLink }) => {
    return (
        <div className={styles.project}>
            <div className={styles["img-wrapper"]}>
                <img src={img} alt="" />
                <h3>{title}</h3>
                <div className={styles["project-links"]}>
                    <Link className={"bx-code-alt"} link={frontendLink} />
                    {backendLink && (
                        <Link className={"bx-code-alt"} link={backendLink} />
                    )}
                    <Link className={"bx-globe"} link={liveLink} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
