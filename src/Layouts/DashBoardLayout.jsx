
import DashBoardSideLayout from "../Components/DashBoardSideLayout";
import DashBoardMainLayout from "../Components/DashBoardMainLayout";

const DashBoardLayout = () => {
    return (
        <div className='h-full w-full flex'>
        <DashBoardSideLayout />

        <DashBoardMainLayout />
        </div>
    );
}

export default DashBoardLayout;
