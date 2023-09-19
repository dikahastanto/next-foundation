import { NextRequest, NextResponse} from "next/server"
import { useRouter } from 'next/navigation'
import { pushRoute } from '@/routes'
import routes from "./routes/routes";
import { all } from "./helper/ListRole";

function findRouteNameByPath(routes: any, targetPath: string) : any {
  const sanitizedTargetPath = targetPath.replace(/\/:[^/]+/g, '')

  for (const route of routes) {
    if (sanitizedTargetPath.startsWith(route.path)) {
      return route;
    }
  }

  return null
}

export default function Middleware (req: NextRequest) {
  const obj = findRouteNameByPath(routes, req.nextUrl.pathname)
  const session: any = req.cookies.get('user')?.value
  const dataUser: any = session ? JSON.parse(session) : null
  const sessionRole: string = dataUser?.id_level

  if (session) {
    if (obj?.meta.auth) {
      if (obj?.meta.allowedRole === sessionRole) {
        return NextResponse.next()
      } else {
        return NextResponse.redirect(`${req.nextUrl.origin}/user/login`)
      }
    } else {
      const findRoutes = all.find(r => r.value === sessionRole)
  
      if (findRoutes) {
        return NextResponse.redirect(`${req.nextUrl.origin}${pushRoute({name: findRoutes.index})}`)
      }
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}