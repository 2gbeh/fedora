import { Trash2Icon } from "lucide-react";
//
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

export default function ProfilePage() {
  return (
    <DashboardLayout
      pageTitle="Profile"
      pageDisplayTitle="Profile"
      rightSection={
        <Button variant={"destructive"} size={"sm"}>
          <Trash2Icon />
          Deactivate Account
        </Button>
      }
    >
      <div className="max-w-md px-6">
        <Tabs
          defaultValue="profile"
          className="flex flex-col justify-start gap-4"
        >
          <TabsList className="justify-start text-foreground">
            <TabsTrigger value="profile" className="!bg-white">
              Edit Profile
            </TabsTrigger>
            <TabsTrigger value="password">Change Password</TabsTrigger>
            <TabsTrigger value="pin">Update Pin</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
                <CardDescription>
                  Required fields are marked with asterisks(*)
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="username-1">Upload Avatar</Label>
                  <Input
                    id="username-1"
                    name="username"
                    placeholder="Select file"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-name">Name *</Label>
                  <Input id="sheet-demo-name" defaultValue="Emmanuel Tugbeh" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-name">Display Name</Label>
                  <Input id="sheet-demo-name" defaultValue="2gbeh" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-name">Email *</Label>
                  <Input
                    id="sheet-demo-name"
                    defaultValue="etugbeh@outlook.com"
                    disabled
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-name">Telephone</Label>
                  <Input id="sheet-demo-name" defaultValue={"08169960927"} />
                </div>
              </CardContent>
              <CardFooter className="flex-center-end gap-4">
                <Button variant="outline">Cancel</Button>
                <Button onClick={undefined}>Save</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
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
                  <Input
                    id="tabs-demo-current"
                    type="password"
                    name="currentPassword"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">New password *</Label>
                  <Input id="tabs-demo-new" type="password" name="password" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">Retype New password *</Label>
                  <Input
                    id="tabs-demo-new"
                    type="password"
                    name="passwordConfirmation"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex-center-end gap-4">
                <Button variant="outline">Cancel</Button>
                <Button onClick={undefined}>Save</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="pin">
            <Card>
              <CardHeader>
                <CardTitle>Update Pin</CardTitle>
                <CardDescription>
                  Required fields are marked with asterisks(*)
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-current">Current pin *</Label>
                  <Input
                    id="tabs-demo-current"
                    type="password"
                    name="currentPassword"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">New pin *</Label>
                  <Input id="tabs-demo-new" type="password" name="password" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">Retype New pin *</Label>
                  <Input
                    id="tabs-demo-new"
                    type="password"
                    name="passwordConfirmation"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex-center-end gap-4">
                <Button variant="outline">Cancel</Button>
                <Button onClick={undefined}>Save</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
