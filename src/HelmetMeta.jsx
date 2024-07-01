import { Helmet } from "react-helmet";
import resume from "../../../portfolio/src/settings/resume.json";
import settings from "../../../portfolio/src/settings/settings.json";

export const HelmetMeta = () => {
    return (
        <Helmet>
            <meta name="theme-color" content={settings.colors.primary} />
            <title>{resume.basics.name} | {resume.basics.location.city}, {resume.basics.location.country}</title>
            <meta name="author" content={resume.basics.name} />
            <meta name="description" content={resume.basics.description} />
            <meta name="keywords" content={resume.basics.keywords} />
        </Helmet>
    );
};
