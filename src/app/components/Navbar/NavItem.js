import React from "react"
import { Link } from "next/link"

export default function NavItem({ content, to }) {
  return (
    <div className="text-lg cursor-pointer">
      <Link to={`${to}`}>{content}</Link>
    </div>
  );
}