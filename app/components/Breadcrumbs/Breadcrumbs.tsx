"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav aria-label="breadcrumb" className="flex text-lg font-semibold">
      <ul className="breadcrumb flex flex-row items-center justify-center my-2 gap-2">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li>
          <ChevronRight width={20} height={20} />
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          return isLast ? (
            <li
              key={index}
              className="breadcrumb-item active text-neutral-400"
              aria-current="page"
            >
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </li>
          ) : (
            <>
              <li key={index} className="breadcrumb-item">
                <Link href={href}>
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </Link>
              </li>
              <li>
                <ChevronRight width={20} height={20} />
              </li>
            </>
          );
        })}
      </ul>
    </nav>
  );
}
