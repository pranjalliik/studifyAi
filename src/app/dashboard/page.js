'use client'
import DashboardWelcome from '../components/DashboardWelcome'
import DashboardCourses from '../components/DashboardCourses'

function page() {
  return (
    <div className='xl:p-10 lg:p-10 md:p-6 p-2'>

      <DashboardWelcome/>
      <DashboardCourses/>
    </div>
  )
}

export default page