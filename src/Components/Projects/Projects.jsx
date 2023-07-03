import React from 'react';
import { Slide } from 'react-awesome-reveal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const items = [
        {
            name: 'Song Book',
            image: 'https://i.ibb.co/gvVkrXg/screencapture-supersonic-sports-cars-web-app-2023-07-03-10-25-34.png',
            live: 'https://supersonic-sports-cars.web.app/',
            source: 'https://github.com/Sultan-suvo/Sports_CAR_Client',
            description:'This is Language Learning Website.Here You can Pursahse your Language course Which you can learning any language.This is have admin panel,insturctor panel,and also student panel.Populare Class section and also populare instructor class.There is i used HTML,CSS,TailwindCss,ReactJs,Nodejs,ExpressJs,Mongodb(CRUD operation)'
        },
        {
            name: 'Sports Car',
            image: 'https://i.ibb.co/DRBb2XM/screencapture-summercamp-e9fc3-web-app-2023-07-03-10-42-10.png',
            live: 'https://summercamp-e9fc3.web.app/',
            source: 'https://github.com/Sultan-suvo/Summer_camp_CLient',
            description:'This is news Paper Website.Here i used  apis.I used here HTML,CSS,Tailwindcss,Reactjs,Nodejs,ExpressJs.You can read updated news & also read Breaking News.'
        },
        {
            name: 'Foodgenix',
            image: 'https://i.ibb.co/dbpxN2g/screencapture-chef-recipe-hunter-ca501-web-app-2023-07-03-10-49-30.png',
            live: 'https://chef-recipe-hunter-ca501.web.app/',
            source: 'https://github.com/Sultan-suvo/Chef-recipe-hunter-client',
            description:'Quiz Hero Website you can test your Knowledge JavaScrtipt language. I used here HTML, CSS,javaScript Language'
        },
        {
            name: 'Quiz Hero',
            image: 'https://i.ibb.co/JB909yG/screencapture-sultan-suvo-github-io-Quiz-hero-2023-07-03-11-45-02.png',
            live: 'https://github.com/Sultan-suvo/Quiz_hero',
            source: 'https://github.com/Sultan-suvo/Quiz_hero',
            description:'This website you can find your best cheif in this website. I used here Technology HTML,CSS,Tailwidcss,ReactJs,Nodejs,ExpressJs,Mongodb(CRUD Operation).'
        },
        {
            name: 'Abcause Convention Hall',
            image: 'https://i.ibb.co/Cs3gjkt/screencapture-reliable-pony-59a0b5-netlify-app-2023-07-03-11-56-47.png',
            live: 'https://reliable-pony-59a0b5.netlify.app/',
            source: 'https://github.com/Sultan-suvo/Abcause_Convention_HALL',
            description:'The Job Frags Website is here you can apply many other jobs.You can see your grap this website. What you apply this website you can also see that.I used here technology HTML,CSS,JavaScript,ReactJs'
        },
        {
            name: 'The Bike',
            image: 'https://i.ibb.co/wBKB2Nc/screencapture-second-price-surge-sh-2023-07-03-12-04-24.png',
            live: 'https://second-price.surge.sh/#',
            source: 'https://github.com/Sultan-suvo/Bikers-Zone',
            description:'The Bike Website where you can buy your best bike.The bike website i used Technology HTML,CSS,tailwidcss,Reactjs,Website is fully responsive.I used Also here RESETAPIs'
        },
    ];

    return (
         <div className='bg-[#FDF8F7]'>
            <div className='text-center my-12'>
                <h1 className='font-semibold text-yellow-500 text-2xl'>Portfolio</h1>
                <h1 className='font-bold mb-5 text-4xl'>My Amazing Work</h1>
                <hr />
            </div>
            <div className='bg-slate-800 md:ms-8 rounded-md md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-between p-8 container mx-auto'>
                {items.map((item) => (
                    <Slide key={item.name} direction="left">
                        <Card className='shadow-2xl my-8 w-full mx-auto'>
                            <CardMedia
                                component="img"
                                alt={item.name}
                                height="180"
                                image={item.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link target='_blank' to={item.live}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        startIcon={<FaExternalLinkAlt />}
                                        sx={{
                                            backgroundColor: '#3f51b5',
                                            color: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#2c3e99',
                                            },
                                        }}
                                    >
                                        Live Site
                                    </Button>
                                </Link>
                                <Link target='_blank' to={item.source}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        startIcon={<FaGithub />}
                                        sx={{
                                            backgroundColor: '#f44336',
                                            color: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#d32f2f',
                                            },
                                        }}
                                    >
                                        Source Code
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Slide>
                ))}
            </div>
        </div>
    );
};

export default Projects;


/* 
https://i.ibb.co/7j2vvHr/download-1.png
https://i.ibb.co/HrTsq20/download-2.png
https://i.ibb.co/xgL7sWc/download-3.png
https://i.ibb.co/nBVm3V9/download-4.png
https://i.ibb.co/M60SJWL/download-5.png
https://i.ibb.co/vxSmN3j/download.png
*/