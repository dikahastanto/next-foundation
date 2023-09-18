import routes from "./routes"
type PushProps = {
  name: string | undefined,
  params?: Record <string, string>,
  queryParams?: Record <string, string>
}

function pushRoute (props: PushProps) : string {
  const fullPath = findRoute(props.name)
  let realPath = replacePath(fullPath, props.params)
  

  if (props.queryParams) {
    const query = new URLSearchParams(props.queryParams);
    if (query.toString()) {
      realPath += '?' + query.toString();
    }
  }

  return realPath
}

function findRoute (name: string | undefined, listRoutes: any[] = routes, currentPath: string = '') : any {


  for (const route of listRoutes) {
    const newPath = currentPath + route.path;

    if (route.routes) {
      const foundRoute = findRoute(name, route.routes, newPath);
      if (foundRoute) {
        return foundRoute;
      }
    } else if (route.name === name) {
      return newPath;
    }
  }
  return '';

}

function replacePath(url: string, params: Record <string, string> = {}) {
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const paramRegex = new RegExp(':' + key, 'g');
      url = url.replace(paramRegex, params[key]);
    }
  }
  return url;
}

export { pushRoute }