import routesApi from '../../../config'
const userRoutes = (api:any) => {
    return {
        login(data:any){
            const loginApi = routesApi.routesApi.user.login
            return api.api.request({method:loginApi.method,route:loginApi.path,data:data})

        }
    }
}
export default userRoutes