import AccountHeader from "@/components/account/account-header";
import Container from "@/components/container";
export default async function ContaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Container >
            <AccountHeader />
            {children}
        </Container>
    );
}