interface accessProps {
  label: string,
  value: string,
  index: string
}
const adminKeuangan: accessProps = {
  label: 'Admin Keuangan',
  value: '5',
  index: 'dashboardAdminKeuangan'
}

const mahasiswa: accessProps = {
  label: 'Mahasiswa',
  value: '1',
  index: 'dashboardMahasiswa'
}

const all : accessProps[] = [
  adminKeuangan,
  mahasiswa
]

export {
  adminKeuangan,
  mahasiswa,
  all
}
