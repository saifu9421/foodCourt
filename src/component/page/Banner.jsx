
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import React, { useState } from 'react';
// import SwipeableViews from "react-swipeable-views";



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
      label: 'Pasta',
      imgPath:
        'https://i.ibb.co/cvTJ1F7/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg',
    },
    {
      label: 'Bargar',
      imgPath:
        'https://i.ibb.co/jk9GWc0/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai.jpg',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://i.ibb.co/tKGRNzq/chicken-skewers-with-slices-sweet-peppers-dill.jpg',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
          'https://i.ibb.co/TKQ9Rbd/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table.jpg',
      },
    {
      label: 'Pizza',
      imgPath:
        'https://i.ibb.co/k9VgSRL/side-view-eggplant-pizza-with-grilled-slices-red-meat-tomato-eggplant-cheese-bell-pepper-table.jpg',
    },
  ];



const Banner = () => {

  
    const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };



    return (
        <div className='mt-5 lg:mt-5 md:mt-5 mb-5 lg:mb-5 md:mb-5 lg:rounded-lg md:rounded-lg  rounded-lg overflow-hidden '>
             <Box sx={{ maxWidth: 1000, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 300,
                  display: 'block',
                  maxWidth: 1000,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  
        </div>
    );
};

export default Banner;