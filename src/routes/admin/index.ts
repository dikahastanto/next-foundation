import { adminKeuangan } from "@/helper/ListRole"
const adminRoutes = {
  path: '/admin',
  meta: {
    allowedRole: adminKeuangan.value,
    auth: true
  },
  routes: [
    {
      path: '',
      name: adminKeuangan.index
    },
    {
      path: '/tagihan',
      name: 'dataTagihanAdminKeuangan'
    },
    // {
    //   path: '/tagihan/input',
    //   name: 'inputDataTagihanAdmin'
    // }
  ]
}
export default adminRoutes