import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect old about-us route to new SEO-optimized route
  if (pathname === '/about-us') {
    return NextResponse.redirect(
      new URL('/about-maple-dental-harrisburg-pa', request.url),
      301
    )
  }

  // Redirect old service routes to new SEO-optimized routes
  const serviceRedirects: { [key: string]: string } = {
    '/services/emergency-dentistry': '/services/emergency-dentistry-harrisburg-pa',
    '/services/root-canal': '/services/root-canal-treatment-harrisburg-pa',
    '/services/oral-surgery': '/services/oral-surgery-harrisburg-pa',
    '/services/cosmetic-dentistry': '/services/cosmetic-dentistry-harrisburg-pa',
    '/services/dental-fillings': '/services/dental-fillings-harrisburg-pa',
    '/services/dental-implants': '/services/dental-implants-harrisburg-pa',
    '/services/orthodontics': '/services/orthodontics-harrisburg-pa',
    '/services/crowns-and-bridges': '/services/crowns-and-bridges-harrisburg-pa',
    '/services/dental-emergencies': '/services/dental-emergencies-harrisburg-pa',
    '/services/tooth-extraction': '/services/tooth-extraction-harrisburg-pa',
    '/services/whitening-&-veneers': '/services/teeth-whitening-and-veneers-harrisburg-pa',
    '/services/invisalign': '/services/invisalign-clear-aligners-harrisburg-pa',
    '/services/kids-&-children-dentistry': '/services/kids-and-children-dentistry-harrisburg-pa',
    '/services/permanent-teeth-replacement': '/services/permanent-teeth-replacement-harrisburg-pa',
    '/services/wisdom-teeth': '/services/wisdom-teeth-harrisburg-pa',
    '/services/endodontics': '/services/endodontics-harrisburg-pa',
    '/services/same-day-dentistry': '/services/same-day-dentistry-harrisburg-pa',
    '/services/painless-treatment': '/services/painless-treatment-harrisburg-pa',
    '/services/perio-protect': '/services/perio-protect-harrisburg-pa',
    '/services/halitosis': '/services/halitosis-harrisburg-pa',
    '/services/sports-dentistry': '/services/sports-dentistry-harrisburg-pa'
  }

  // Redirect old service area routes to new SEO-optimized routes
  const serviceAreaRedirects: { [key: string]: string } = {
    '/service-areas/harrisburg': '/service-areas/harrisburg-pa-dentist-near-you',
    '/service-areas/linglestown': '/service-areas/linglestown-pa-dentist-near-you',
    '/service-areas/colonial-park': '/service-areas/colonial-park-pa-dentist-near-you',
    '/service-areas/penbrook': '/service-areas/penbrook-pa-dentist-near-you',
    '/service-areas/paxtang': '/service-areas/paxtang-pa-dentist-near-you',
    '/service-areas/progress': '/service-areas/progress-pa-dentist-near-you',
    '/service-areas/lawnton': '/service-areas/lawnton-pa-dentist-near-you'
  }

  // Redirect other pages to new SEO-optimized routes
  const pageRedirects: { [key: string]: string } = {
    '/offers': '/teeth-whitening-offer-harrisburg-pa',
    '/providers/simranjeet-dhaliwal': '/providers/simranjeet-dhaliwal-harrisburg-pa-dentist',
    '/reviews': '/patient-reviews-harrisburg-pa',
    '/blog': '/dental-blog',
    '/contact-us': '/contact-maple-dental-harrisburg-pa'
  }

  // Check if current path needs to be redirected
  for (const [oldPath, newPath] of Object.entries(serviceRedirects)) {
    if (pathname === oldPath) {
      return NextResponse.redirect(
        new URL(newPath, request.url),
        301
      )
    }
  }

  // Check if current path needs to be redirected for service areas
  for (const [oldPath, newPath] of Object.entries(serviceAreaRedirects)) {
    if (pathname === oldPath) {
      return NextResponse.redirect(
        new URL(newPath, request.url),
        301
      )
    }
  }

  // Check if current path needs to be redirected for other pages
  for (const [oldPath, newPath] of Object.entries(pageRedirects)) {
    if (pathname === oldPath) {
      return NextResponse.redirect(
        new URL(newPath, request.url),
        301
      )
    }
  }

  return NextResponse.next()
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
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
