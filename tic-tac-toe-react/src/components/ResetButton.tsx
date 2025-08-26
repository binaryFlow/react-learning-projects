interface ResetButtonProps {
  onResetButtonClick: () => void;
}

const ResetButton = ({ onResetButtonClick }: ResetButtonProps) => {
  return (
    <div className="flex items-center justify-center w-screen">
  <button
      type="button"
      className="cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      onClick={onResetButtonClick}
    >
      Reset
    </button>
  
</div>
    
  );
};

export default ResetButton;
