import { useTranslation } from "react-i18next";
import PortalLayout from "../../layout/PublicLayout";

export default function PublicHome() {
    const { t: __ } = useTranslation(['static-text']);

    return (
        <>
            <PortalLayout
                pageTitle="Home Page"
                activePage="home"
                title="Home"
                subtitle={__('Home Page')}
                breadcrumbs={[
                    { label: 'Website', href: '/' },
                ]}
            >
                Home Page
            </PortalLayout>
        </>
    )
}
