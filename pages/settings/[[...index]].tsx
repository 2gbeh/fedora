import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
//
import { DashboardLayout } from "@/components/species/dashboard/ui/dashboard-layout";

export default function SettingsPage() {
  return (
    <DashboardLayout pageTitle="Settings" pageDisplayTitle="Settings">
      <div className="max-w-md px-6">
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>
              Required fields are marked with asterisks(*)
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="tabs-demo-current">Current password *</Label>
              <Input id="tabs-demo-current" type="currentPassword" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tabs-demo-new">New password *</Label>
              <Input id="tabs-demo-new" type="password" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tabs-demo-new">Retype New password *</Label>
              <Input id="tabs-demo-new" type="passwordConfirmation" />
            </div>
          </CardContent>
          <CardFooter className="flex-center-end gap-4">
            <Button variant="outline">Cancel</Button>
            <Button onClick={undefined}>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
}
