import { Label } from "@/components/shadcn/ui/label";
import { Checkbox } from "@/components/shadcn/ui/checkbox";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
//
import { DashboardLayout } from "@/components/species/dashboard/ui/dashboard-layout";

export default function SettingsPage() {
  return (
    <DashboardLayout pageTitle="Settings" pageDisplayTitle="Settings">
      <div className="max-w-md px-6">
        <Card>
          <CardHeader>
            <CardTitle>App Settings</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox
                id="toggle-2"
                defaultChecked
                className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
              />
              <div className="grid gap-1.5 font-normal">
                <p className="text-sm font-medium leading-none">
                  Prototyping Mode
                </p>
                <p className="text-sm text-muted-foreground">
                  Switch currency, and sanitize database mutations during demo
                  presentation.
                </p>
              </div>
            </Label>
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
