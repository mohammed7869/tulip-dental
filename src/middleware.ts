import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect old about-us route to new SEO-optimized route
  if (pathname === "/about-us") {
    return NextResponse.redirect(
      new URL("/about-tulip-dental-maplewood-nj", request.url),
      301
    );
  }

  // Redirect old service routes to new SEO-optimized routes
  const serviceRedirects: { [key: string]: string } = {
    "/services/emergency-dentistry":
      "/services/emergency-dentistry-maplewood-nj",
    "/services/root-canal": "/services/root-canal-treatment-maplewood-nj",
    "/services/oral-surgery": "/services/oral-surgery-maplewood-nj",
    "/services/cosmetic-dentistry": "/services/cosmetic-dentistry-maplewood-nj",
    "/services/dental-fillings": "/services/dental-fillings-maplewood-nj",
    "/services/dental-implants": "/services/dental-implants-maplewood-nj",
    "/services/orthodontics": "/services/orthodontics-maplewood-nj",
    "/services/crowns-and-bridges": "/services/crowns-and-bridges-maplewood-nj",
    "/services/dental-emergencies": "/services/dental-emergencies-maplewood-nj",
    "/services/tooth-extraction": "/services/tooth-extraction-maplewood-nj",
    "/services/whitening-&-veneers":
      "/services/teeth-whitening-and-veneers-maplewood-nj",
    "/services/invisalign": "/services/invisalign-clear-aligners-maplewood-nj",
    "/services/kids-&-children-dentistry":
      "/services/kids-and-children-dentistry-maplewood-nj",
    "/services/permanent-teeth-replacement":
      "/services/permanent-teeth-replacement-maplewood-nj",
    "/services/wisdom-teeth": "/services/wisdom-teeth-maplewood-nj",
    "/services/endodontics": "/services/endodontics-maplewood-nj",
    "/services/same-day-dentistry": "/services/same-day-dentistry-maplewood-nj",
    "/services/painless-treatment": "/services/painless-treatment-maplewood-nj",
    "/services/perio-protect": "/services/perio-protect-maplewood-nj",
    "/services/halitosis": "/services/halitosis-maplewood-nj",
    "/services/sports-dentistry": "/services/sports-dentistry-maplewood-nj",
  };

  // Redirect old service area routes to new SEO-optimized routes
  const serviceAreaRedirects: { [key: string]: string } = {
    "/service-areas/maplewood": "/service-areas/maplewood-nj-dentist-near-you",
    "/service-areas/linglestown":
      "/service-areas/linglestown-pa-dentist-near-you",
    "/service-areas/colonial-park":
      "/service-areas/colonial-park-pa-dentist-near-you",
    "/service-areas/penbrook": "/service-areas/penbrook-pa-dentist-near-you",
    "/service-areas/paxtang": "/service-areas/paxtang-pa-dentist-near-you",
    "/service-areas/progress": "/service-areas/progress-pa-dentist-near-you",
    "/service-areas/lawnton": "/service-areas/lawnton-pa-dentist-near-you",
  };

  // Redirect other pages to new SEO-optimized routes
  const pageRedirects: { [key: string]: string } = {
    "/offers": "/teeth-whitening-offer-maplewood-nj",
    "/providers/simranjeet-dhaliwal":
      "/providers/simranjeet-dhaliwal-maplewood-nj-dentist",
    "/reviews": "/patient-reviews-maplewood-nj",
    "/blog": "/dental-blog",
    "/contact-us": "/contact-tulip-dental-maplewood-nj",
  };

  // Check if current path needs to be redirected
  for (const [oldPath, newPath] of Object.entries(serviceRedirects)) {
    if (pathname === oldPath) {
      return NextResponse.redirect(new URL(newPath, request.url), 301);
    }
  }

  // Check if current path needs to be redirected for service areas
  for (const [oldPath, newPath] of Object.entries(serviceAreaRedirects)) {
    if (pathname === oldPath) {
      return NextResponse.redirect(new URL(newPath, request.url), 301);
    }
  }

  // Check if current path needs to be redirected for other pages
  for (const [oldPath, newPath] of Object.entries(pageRedirects)) {
    if (pathname === oldPath) {
      return NextResponse.redirect(new URL(newPath, request.url), 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
