import BrandLogo from "@/components/ui/brand-logo";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserAgreementForm from "./_components/use-agreement-form";

export interface IOnboardingPageProps {}

export default function OnboardingPage(props: IOnboardingPageProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-8 px-8">
      <BrandLogo />

      <Card className="max-w-[380px]">
        <CardHeader className="text-center">
          <CardTitle>Terms & Conditions</CardTitle>
        </CardHeader>
        <CardDescription>
          <UserAgreementForm />
        </CardDescription>
      </Card>
    </div>
  );
}
