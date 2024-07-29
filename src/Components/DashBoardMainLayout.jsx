import { Outlet } from "react-router-dom"

const DashBoardMainLayout = () => {
    return (
        <>
            {/* MainLayout */}
            <div className='h-full w-full flex flex-[2.7] bg-white'>
                <Outlet />
            </div>
        </>
    )
}

export default DashBoardMainLayout