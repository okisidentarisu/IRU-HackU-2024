/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/aUEXbwpH6bm
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Select } from "@/components/ui/select"

export function settings() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" href="#">
          <FrameIcon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="font-bold" href="#">
            Devices
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Settings
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Users
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex items-center gap-2 md:gap-4 lg:gap-8 ml-auto">
            <Label className="hidden" htmlFor="search">
              Search
            </Label>
            <Input
              className="sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] order-last"
              id="search"
              placeholder="Search..."
              type="search"
            />
            <Button size="icon" type="submit" variant="ghost">
              <SearchIcon className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col p-4 md:p-6 gap-4 md:gap-8">
        <div className="flex items-center gap-4">
          <Button className="rounded-full h-10 w-10" size="icon" variant="outline">
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="font-semibold text-lg md:text-2xl">Device Settings</h1>
        </div>
        <div className="grid gap-4 md:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Temperature</CardTitle>
              <CardDescription>Set the desired temperature</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex items-center gap-4 md:gap-8">
                <Label className="peer-hidden" htmlFor="temperature">
                  Temperature
                </Label>
                <Input
                  className="w-full max-w-[200px] peer-hidden"
                  defaultValue="25"
                  id="temperature"
                  max="100"
                  min="0"
                  placeholder="Temperature"
                  type="number"
                />
                <Button type="submit">Save</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Light</CardTitle>
              <CardDescription>Turn the light on or off</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex items-center gap-4 md:gap-8">
                <Label className="peer-hidden" htmlFor="light">
                  Light
                </Label>
                <Select className="min-w-[200px] peer-hidden" id="light">
                  <option>On</option>
                  <option>Off</option>
                </Select>
                <Button type="submit">Save</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mode</CardTitle>
              <CardDescription>Set the mode</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex items-center gap-4 md:gap-8">
                <Label className="peer-hidden" htmlFor="mode">
                  Mode
                </Label>
                <Select className="min-w-[200px] peer-hidden" id="mode">
                  <option>Normal</option>
                  <option>Energy saving</option>
                  <option>Boost</option>
                </Select>
                <Button type="submit">Save</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}


function FrameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}