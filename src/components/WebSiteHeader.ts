"use client";
import React, { useState, useRef, useEffect } from "react";

export default function WebSiteHeader(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const wrapperRef = useRef<any>(null);
  const featuresRef = useRef<any>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      const target = e.target as Node;
      if (!wrapperRef.current) return;
      // if click is outside the header area, close mega
      if (!wrapperRef.current.contains(target)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const navItems = [
    { title: "Home", href: "#" },
    { title: "Features", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "FAQs", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Contact", href: "#" },
  ];

  const navLinks = navItems.map((item, i) => {
    // Features will toggle mega menu
    if (item.title === "Features") {
      return React.createElement(
        "a",
        {
          key: item.title + i,
          href: item.href,
          className:
            "text-sm text-gray-800 hover:text-sky-600 relative inline-flex items-center",
          onClick: (e: any) => {
            e.preventDefault();
            setMegaOpen((p) => !p);
          },
          ref: featuresRef,
          "aria-haspopup": "menu",
          "aria-expanded": megaOpen ? "true" : "false",
        },
        item.title
      );
    }

    return React.createElement(
      "a",
      {
        key: item.title + i,
        href: item.href,
        className: "text-sm text-gray-800 hover:text-sky-600",
        onClick: () => setMegaOpen(false),
      },
      item.title
    );
  });

  const mobileLinks = navItems.map((item, i) =>
    React.createElement(
      "a",
      {
        key: item.title + "m" + i,
        href: item.href,
        className: "block text-gray-800 px-2 py-2 rounded hover:bg-gray-100",
        onClick: () => {
          // close mega when navigating on mobile
          setMegaOpen(false);
          setOpen(false);
        },
      },
      item.title
    )
  );

  const menuIcon = megaOpen
    ? React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M6 18L18 6M6 6l12 12",
      })
    : React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M4 6h16M4 12h16M4 18h16",
      });

  const headerInner = React.createElement(
    "div",
    {
      ref: wrapperRef,
      className:
        "max-w-7xl bg-white md:mt-4 rounded-md mx-auto px-4 sm:px-6 lg:px-8",
    },
    React.createElement(
      "div",
      { className: "flex items-center justify-between h-16" },
      // left
      React.createElement(
        "div",
        { className: "flex items-center gap-6" },
        React.createElement(
          "a",
          {
            href: "#",
            className:
              "flex items-center px-3 py-2 bg-sky-100 text-sky-700 rounded-md font-semibold shadow-sm",
          },
          "Logo"
        )
      ),
      // center
      React.createElement(
        "div",
        { className: "hidden md:flex items-center gap-6" },
        navLinks
      ),
      // right
      React.createElement(
        "div",
        { className: "flex items-center gap-4" },
        React.createElement(
          "div",
          { className: "hidden md:flex items-center gap-4" },
          React.createElement(
            "a",
            {
              href: "#",
              className: "text-sm text-gray-800 hover:underline",
              onClick: () => setMegaOpen(false),
            },
            "Sign In"
          ),
          React.createElement(
            "a",
            {
              href: "#",
              className:
                "inline-flex items-center px-4 py-2 bg-sky-500 text-white rounded-full text-sm font-semibold hover:bg-sky-600",
              onClick: () => setMegaOpen(false),
            },
            "Sign Up"
          )
        ),
        React.createElement(
          "button",
          {
            className:
              "md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100",
            onClick: () => {
              // when opening mobile menu, make sure mega menu is closed
              setOpen((p) => {
                const next = !p;
                if (next) setMegaOpen(false);
                return next;
              });
            },
            "aria-label": "Toggle menu",
            "aria-expanded": open ? "true" : "false",
          },
          React.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
            },
            menuIcon
          )
        )
      )
    )
  );

  const megaPanel = React.createElement(
    "div",
    {
      className:
        "absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-4xl bg-white  shadow-lg rounded-md p-6 z-40",
      role: "menu",
      "aria-label": "Features",
    },
    React.createElement(
      "div",
      { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" },
      // example mega menu groups
      React.createElement(
        "div",
        null,
        React.createElement(
          "h4",
          { className: "font-semibold mb-2" },
          "Planning"
        ),
        React.createElement(
          "ul",
          { className: "space-y-2 text-sm text-gray-700" },
          React.createElement(
            "li",
            null,
            React.createElement("a", { href: "#" }, "Smart Scheduling")
          ),
          React.createElement(
            "li",
            null,
            React.createElement("a", { href: "#" }, "Campaign Management")
          ),
          React.createElement(
            "li",
            null,
            React.createElement("a", { href: "#" }, "Content Calendar")
          )
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "h4",
          { className: "font-semibold mb-2" },
          "Analytics"
        ),
        React.createElement(
          "ul",
          { className: "space-y-2 text-sm text-gray-700" },
          React.createElement(
            "li",
            null,
            React.createElement("a", { href: "#" }, "Analytics & Reporting")
          ),
          React.createElement(
            "li",
            null,
            React.createElement("a", { href: "#" }, "UTM Tracking")
          ),
          React.createElement(
            "li",
            null,
            React.createElement("a", { href: "#" }, "Social Listening")
          )
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "h4",
          { className: "font-semibold mb-2" },
          "Assets"
        ),
        React.createElement(
          "ul",
          { className: "space-y-2 text-sm text-gray-700" },
          React.createElement(
            "li",
            null,
            React.createElement("a", { href: "#" }, "Content Library")
          ),
          React.createElement(
            "li",
            null,
            React.createElement("a", { href: "#" }, "Bulk Import")
          ),
          React.createElement(
            "li",
            null,
            React.createElement("a", { href: "#" }, "Team Collaboration")
          )
        )
      )
    )
  );

  const mobilePanel = React.createElement(
    "div",
    {
      className:
        "md:hidden bg-white shadow mt-2 rounded-md mx-4 p-4 absolute left-0 right-0 z-20",
    },
    React.createElement(
      "nav",
      { className: "flex flex-col gap-3" },
      mobileLinks
    ),
    React.createElement(
      "div",
      { className: "mt-2 pt-2 border-t border-gray-100 flex flex-col gap-2" },
      React.createElement(
        "a",
        {
          href: "#",
          className:
            "block text-sm text-gray-800 px-2 py-2 rounded hover:bg-gray-100",
          onClick: () => setOpen(false),
        },
        "Sign In"
      ),
      React.createElement(
        "a",
        {
          href: "#",
          className:
            "block text-sm text-white bg-sky-500 px-3 py-2 rounded-full text-center font-semibold hover:bg-sky-600",
          onClick: () => setOpen(false),
        },
        "Sign Up"
      )
    )
  );

  return React.createElement(
    "header",
    {
      className:
        "fixed top-0 left-0 right-0 w-full bg-white/70  backdrop-blur-sm z-50 ",
    },
    headerInner,
    // render mega panel under header only when open and on desktop
    megaOpen ? megaPanel : null,
    open ? mobilePanel : null
  );
}
