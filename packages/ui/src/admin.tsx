"use client";
import { ReactNode } from "react";
import { Card } from "./card";
const Admin = ({
  children,
  className,
  title,
}: {
  children: ReactNode;
  className?: string;
  title: string;
}) => {
  return (
    <Card className={className} title={title} href="/admin">
      {children}
    </Card>
  );
};

export default Admin;
