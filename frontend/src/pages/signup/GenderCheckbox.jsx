const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
					<span className='label-text'>Male</span>
					<input
						name="gender-male"
						type='checkbox'
						className='checkbox border-slate-900'
						onChange={(e) => {
							if (e.target.checked) {
								onCheckboxChange("male")
							}
						}}
						checked={selectedGender === "male"}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
					<span className='label-text'>Female</span>
					<input
						type='checkbox'
						name="gender-female"
						className='checkbox border-slate-900'
						onChange={(e) => {
							if (e.target.checked) {
								onCheckboxChange("female")
							}
						}}
						checked={selectedGender === "female"}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;