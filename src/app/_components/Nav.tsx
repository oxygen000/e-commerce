"use client";

import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  FaTruck,
  FaGift,
  FaPhone,
  FaEnvelope,
  FaShoppingCart,
  FaBars,
  FaHeadset,
} from "react-icons/fa";

import { FiLogOut, FiUser } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import Logo from "../../assets/FreshCartlogo.svg";
import { useContext, useState } from "react";
import { FaCartShopping, FaHeart, FaXmark } from "react-icons/fa6";
import { signOut, useSession } from "next-auth/react";
import { User } from "lucide-react";
import { cartContext } from "../_context/cartContextProvider";
import { WishlistContext } from "../_context/WishlistContextProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  const { numberOfCartItems } = useContext(cartContext);
  const { wishlist } = useContext(WishlistContext);

  console.log(session, status);

  function handelLogout() {
    signOut({ redirect: true, callbackUrl: "/Login" });
  }
  return (
    <>
      <div className="hidden lg:block text-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center gap-6 text-gray-500">
              <span className="flex items-center gap-2">
                <FaTruck className="text-[#16A34A] text-xs" />
                Free Shipping on Orders 500 EGP
              </span>

              <span className="flex items-center gap-2">
                <FaGift className="text-[#16A34A] text-xs" />
                New Arrivals Daily
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-gray-500">
                <Link
                  href="tel:+18001234567"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <FaPhone className="text-xs" />
                  +1 (800) 123-4567
                </Link>

                <Link
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <FaEnvelope className="text-xs" />
                  support@freshcart.com
                </Link>
              </div>

              <span className="w-px h-4 bg-gray-200" />

              <div className="flex items-center gap-4">
                {status === "authenticated" ? (
                  <>
                    <div className="flex items-center gap-1.5 text-gray-700">
                      <FiUser size={14} />
                      <span>{session.user?.name}</span>
                    </div>

                    <button
                      onClick={handelLogout}
                      className="flex items-center gap-1.5 text-gray-600 hover:text-red-500 transition"
                    >
                      <FiLogOut size={14} />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/Login"
                      className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition"
                    >
                      <FiUser size={14} />
                      Sign In
                    </Link>

                    <Link
                      href="/SignUp"
                      className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition"
                    >
                      <FiUser size={14} />
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-[72px] gap-6">
            <Link href="/" className="shrink-0">
              <Image
                src={Logo}
                alt="logo"
                width={160}
                height={32}
                className="h-6 lg:h-8 w-auto"
              />
            </Link>

            <form className="hidden lg:flex flex-1 max-w-xl relative">
              <Input
                placeholder="Search for products..."
                className="rounded-full pr-12 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary "
              />

              <Button
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#16A34A]"
              >
                <IoSearch />
              </Button>
            </form>

            <NavigationMenu className="hidden xl:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/shop">Shop</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="w-[200px] p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/categories"
                            className="block px-3 py-2 hover:bg-muted rounded-md"
                          >
                            All Categories
                          </Link>
                        </NavigationMenuLink>
                      </li>

                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products?category=electronics"
                            className="block px-3 py-2 hover:bg-muted rounded-md"
                          >
                            Electronics
                          </Link>
                        </NavigationMenuLink>
                      </li>

                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products?category=women"
                            className="block px-3 py-2 hover:bg-muted rounded-md"
                          >
                            Women&apos;s Fashion
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/brands">Brands</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <FaHeadset className="text-green-600" size={16} />
                </div>

                <div className="text-xs">
                  <div className="text-gray-400">Support</div>
                  <div className="font-semibold text-gray-700">24/7 Help</div>
                </div>
              </Link>

              <Link
                href="/wishlist"
                className="p-2.5 rounded-full hover:bg-muted text-[#767D8C] relative"
              >
                {wishlist.length ? (
                  <>
                    <span className="absolute top-0.5 right-0.5 size-[18px] rounded-full bg-[#a31622] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                      {wishlist.length}
                    </span>
                  </>
                ) : null}
                <FaHeart size={18} />
              </Link>

              <Link
                href="/cart"
                className="p-2.5 rounded-full hover:bg-muted text-[#767D8C] relative"
              >
                {numberOfCartItems ? (
                  <>
                    <span className="absolute top-0.5 right-0.5 size-[18px] rounded-full bg-[#16A34A] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                      {numberOfCartItems}
                    </span>
                  </>
                ) : null}

                <FaShoppingCart size={18} />
              </Link>

              {status === "authenticated" ? null : (
                <>
                  <Button className="hidden lg:flex rounded-full gap-2 bg-[#16A34A] cursor-pointer">
                    <Link
                      href="/Login"
                      className="flex items-center gap-1.5 justify-content-center "
                    >
                      <FiUser size={14} />
                      Sign In
                    </Link>
                  </Button>
                </>
              )}

              <Button
                size="icon"
                className="lg:hidden rounded-full bg-[#16A34A]"
                onClick={() => setOpen(!open)}
              >
                <FaBars />
              </Button>
              {open && (
                <div className="fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300">
                  <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 overflow-y-auto">
                    <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
                      <Image
                        src={Logo}
                        alt="FreshCart"
                        width={160}
                        height={32}
                        className="h-8 w-auto"
                      />

                      <button
                        onClick={() => setOpen(false)}
                        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <FaXmark className="text-gray-600" />
                      </button>
                    </div>

                    <form className="p-4 border-b border-gray-100">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search products..."
                          className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />

                        <button
                          type="submit"
                          className="absolute bg-[#16A34A] right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg  text-white flex items-center justify-center"
                        >
                          <IoSearch className="text-sm" />
                        </button>
                      </div>
                    </form>

                    <nav className="p-4">
                      <div className="space-y-1">
                        <Link
                          href="/"
                          className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                          Home
                        </Link>

                        <Link
                          href="/products"
                          className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                          Shop
                        </Link>

                        <Link
                          href="/categories"
                          className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                          Categories
                        </Link>

                        <Link
                          href="/brands"
                          className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                          Brands
                        </Link>
                      </div>
                    </nav>

                    <div className="mx-4 border-t border-gray-100"></div>

                    <div className="p-4 space-y-1">
                      <Link
                        href="/wishlist"
                        className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                            <FaHeart className="text-red-500" />
                          </div>

                          <span className="font-medium text-gray-700">
                            Wishlist
                          </span>
                        </div>
                      </Link>

                      <Link
                        href="/cart"
                        className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#DCFCE7] flex items-center justify-center relative">
                            {numberOfCartItems ? (
                              <>
                                <span className="absolute top-0.5 right-0.5 size-[18px] rounded-full bg-[#16A34A] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                                  {numberOfCartItems}
                                </span>
                              </>
                            ) : null}
                            <FaCartShopping className="text-[#16A34A]" />
                          </div>

                          <span className="font-medium text-gray-700">
                            Cart
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="mx-4 border-t border-gray-100"></div>

                    <div className="p-4">
                      {session ? (
                        <div className="flex items-center justify-between gap-3 pt-2">
                          <div className="flex items-center gap-2">
                            <User className="w-6 h-6 text-[#16A34A]" />
                            <span className="font-semibold text-gray-800">
                              {session.user?.name}
                            </span>
                          </div>

                          <button
                            onClick={handelLogout}
                            className="px-4 py-2 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
                          >
                            Logout
                          </button>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-3 pt-2">
                          <Link
                            href="/Login"
                            className="flex items-center bg-[#16A34A] justify-center px-4 py-3 rounded-xl text-white font-semibold hover:bg-green-700 transition-colors"
                          >
                            Sign In
                          </Link>

                          <Link
                            href="/SignUp"
                            className="flex items-center justify-center px-4 py-3 rounded-xl border-2 border-[#16A34A] text-[#16A34A] font-semibold hover:bg-primary/10 transition-colors"
                          >
                            Sign Up
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link
                      href="/contact"
                      className="mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-primary/10 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                        <FaHeadset className="text-[#16A34A]" />
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-gray-700">
                          Need Help?
                        </div>

                        <div className="text-sm text-primary">
                          Contact Support
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
