import Link from "next/link";
import { CategoriesType } from "@/types/Categories";
import React from "react";

interface CategoriesLinkProps  {
  category?: CategoriesType;
  pathSegments?: string[];
};

export default function Breadcrumb({ category, pathSegments }: CategoriesLinkProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">

      <Link href="/" className="hover:text-white">
        Home
      </Link>

      {/* Path segments */}
      {pathSegments?.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");

        return (
          <React.Fragment key={index}>
            <span>/</span>
            <Link href={href} className="hover:text-white capitalize">
              {decodeURIComponent(segment)}
            </Link>
          </React.Fragment>
        );
      })}

      {/* Last part: real category name */}
      {category && (
        <>
          <span>/</span>
          <span className="text-white font-medium capitalize">{category.name}</span>
        </>
      )}
    </nav>
  );
}