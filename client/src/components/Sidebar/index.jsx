import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css";
import { Collapse } from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';



const Sidebar = () => {

  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);

  const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);

  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);



  return (
    <aside className='sidebar py-5'>
      <div className='box'>
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Shop by Category
          <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
            {
              isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />

            }
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className='scroll px-4 relative -left-[13px]'>
            <FormControlLabel control={<Checkbox size='small' />} label="Fashion" className='w-full' size='' />
            <FormControlLabel control={<Checkbox size='small' />} label="Bag" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label="Footwear" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label="Hijab" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label="Accessories" className='w-full' />
          </div>
        </Collapse>
      </div>


      <div className='box'>
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>
          Availability
          <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'
            onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}>
            {
              isOpenAvailFilter === true ? <FaAngleUp /> : <FaAngleDown />

            }
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailFilter}>
          <div className='scroll px-4 relative -left-[13px]'>
            <FormControlLabel
              control={<Checkbox size='small' />}
              label="Available (17)"
              className='w-full' size=''
            />

            <FormControlLabel
              control={<Checkbox size='small' />}
              label="In stock (17)"
              className='w-full' size=''
            />

            <FormControlLabel
              control={<Checkbox size='small' />}
              label="Not Available (17)"
              className='w-full' size=''
            />


          </div>
        </Collapse>
      </div>


      <div className='box mt-3'>
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>
          Size
          <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}>
            {
              isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />

            }
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className='scroll px-4 relative -left-[13px]'>
            <FormControlLabel
              control={<Checkbox size='small' />}
              label="Small (17)"
              className='w-full' size=''
            />

            <FormControlLabel
              control={<Checkbox size='small' />}
              label="Medium (17)"
              className='w-full' size=''
            />

            <FormControlLabel
              control={<Checkbox size='small' />}
              label="Large (17)"
              className='w-full' size=''
            />

            <FormControlLabel
              control={<Checkbox size='small' />}
              label="XL (17)"
              className='w-full' size=''
            />


            <FormControlLabel
              control={<Checkbox size='small' />}
              label="XXL (17)"
              className='w-full' size=''
            />


          </div>
        </Collapse>
      </div>


      <div className='box mt-4'>
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>
          Filter by Price
        </h3>


        <RangeSlider />
        <div className='flex pt-4 pb-2 priceRange'>
          <span className='text-[13px]'>
            From : <strong className='text-dark'>Rp: {100000}</strong>
          </span>
          <span className='ml-auto text-[13px]'>
            From : <strong className='text-dark'>Rp: {500000}</strong>
          </span>
        </div>

      </div>



      <div className='box mt-4'>
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>
          Filter by Rating
        </h3>

        <div className='w-full'>
          <Rating name="size-small" defaultValue={5} size="small" readOnly />
        </div>
        <div className='w-full'>
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
        </div>
        <div className='w-full'>
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
        </div>
        <div className='w-full'>
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </div>
        <div className='w-full'>
          <Rating name="size-small" defaultValue={1} size="small" readOnly />
        </div>

      </div>

    </aside>
  );
};

export default Sidebar;
