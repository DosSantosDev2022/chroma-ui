'use client'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./index"


export default function CardPreview() {
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>
        <p>Card Description</p>
      </CardDescription>
      <CardAction>
        <p>Card Action</p>
      </CardAction>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
}