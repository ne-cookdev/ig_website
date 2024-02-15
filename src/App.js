import './App.css';
import { Carousel } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import { Timeline } from 'flowbite-react';
import { Collapse } from 'flowbite';


function App() {
	return (
		<div className="App flex flex-col">
			<header className='w-full'>
				<nav class="bg-zinc-800 border-gray-200 dark:bg-gray-900">
					<div class="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
						<a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
							<img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
							<span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
						</a>
						<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-zinc-600 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
							<span class="sr-only">Open main menu</span>
							<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
							</svg>
						</button>
						<div class="absolute top-16 right-6 z-10 hidden w-auto md:block md:w-auto md:static md:top-0 md:right-0" id="navbar-default">
						<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-zinc-800 rounded-lg bg-zinc-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-zinc-800">
							<li>
							<a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 text-white md:text-blue-500" aria-current="page">Home</a>
							</li>
							<li>
							<a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">About</a>
							</li>
							<li>
							<a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent">Services</a>
							</li>
							<li>
							<a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent">Pricing</a>
							</li>
							<li>
							<a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent">Contact</a>
							</li>
						</ul>
						</div>
					</div>
				</nav>
			</header>
			<div className="w-full" style={{height: "40em"}}>
				<Carousel slideInterval={5000}>
				<div className="bg-center bg-no-repeat bg-[url('https://openartsforum.com/wp-content/uploads/2019/07/WAX-1.png')] bg-cover h-full py-24 px-32 flex">
					<h2 className='font-sans font-semibold text-orange-50/80 self-end text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl'>Lorem ipsum</h2>
				</div>
				<div className="bg-center bg-no-repeat bg-[url('https://openartsforum.com/wp-content/uploads/2019/07/WAX-1.png')] bg-cover h-full py-24 px-32 flex">
					<h2 className='font-sans font-semibold text-orange-50/80 self-end text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl'>Lorem ipsum</h2>
				</div>
				<div className="bg-center bg-no-repeat bg-[url('https://openartsforum.com/wp-content/uploads/2019/07/WAX-1.png')] bg-cover h-full py-24 px-32 flex">
					<h2 className='font-sans font-semibold text-orange-50/80 self-end text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl'>Lorem ipsum</h2>
				</div>
				<div className="bg-center bg-no-repeat bg-[url('https://openartsforum.com/wp-content/uploads/2019/07/WAX-1.png')] bg-cover h-full py-24 px-32 flex">
					<h2 className='font-sans font-semibold text-orange-50/80 self-end text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl'>Lorem ipsum</h2>
				</div>
				<div className="bg-center bg-no-repeat bg-[url('https://openartsforum.com/wp-content/uploads/2019/07/WAX-1.png')] bg-cover h-full py-24 px-32 flex">
					<h2 className='font-sans font-semibold text-orange-50/80 self-end text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl'>Lorem ipsum</h2>
				</div>
				</Carousel>
			</div>
			<div className='flex items-center h-16'>
				<hr class="w-64 h-0.5 mx-auto bg-zinc-600 border-0 rounded sm: w-80"></hr>
			</div>
			<div className='h-1/5 flex justify-center items-end pb-12'>
				<div className='rounded-lg flex flex-col justify-center items-center w-3/5 bg-neutral-800 px-8 py-4 box-border sm:px-10 sm:py-6 xl:px-12 xl:py-8' style={{minWidth: '300px'}}>
					<p class="text-zinc-400 text-sm text-left font-light md:text-base lg:text-lg xl:text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia <span className='font-bold text-zinc-200 underline decoration-2 decoration-sky-700'>quibusdam ut</span> dolor amet voluptatum odio voluptatibus ab praesentium odit <span className='font-bold text-zinc-200 underline decoration-2 decoration-pink-800'>nisi</span>, sequi quis quos voluptates <span className='font-bold text-zinc-200 underline decoration-2 decoration-pink-800'>laudantium suscipit,</span> nemo porro qui!
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima natus sint a quod dolores dolorum suscipit tempore officia debitis eveniet in corrupti <span className='font-bold text-zinc-200 underline decoration-2 decoration-indigo-800'>molestiae, nulla</span> sequi facere quisquam veritatis quo quam.
					</p>
				</div>
			</div>
			<div className="w-full flex justify-center mb-16">
				<div class="max-w-sm border-2 rounded-lg shadow border-neutral-800 p-4 w-3/5 md:w-auto" style={{minWidth: '300px'}}>
					<a href="#">
						<img class="rounded-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
					</a>
					<div class="p-5">
						<a href="#">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
						</a>
						<p class="mb-3 font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
					</div>
				</div>
			</div>
			<div className='mb-24 w-full h-full flex flex-col justify-around items-center xl:flex-row' id="team">
				<div className='rounded-lg p-4 h-full flex flex-col justify-center items-center w-3/5 bg-neutral-800 mb-8 sm:w-4/5 md:w-3/5 xl:mb-0 xl:w-2/5' style={{minWidth: '300px'}}>
					<div className='w-full h-1/3 flex flex-col sm:flex-row'>
						<div className='w-full h-full flex p-4'>
							<Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded>
								<div className="space-y-1 font-medium text-white text-left">
									<div>Name Surname</div>
									<div className="text-sm text-gray-400">CEO</div>
								</div>
							</Avatar>
						</div>
						<div className='w-full h-full flex p-4'>
							<Avatar
							img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
							rounded={true}
							>
								<div className="space-y-1 font-medium text-white text-left">
									<div>
									Name Surname
									</div>
									<div className="text-sm text-gray-400">
									CTO
									</div>
								</div>
							</Avatar>
						</div>
					</div>
					<div className='w-full h-1/3 flex flex-col sm:flex-row'>
						<div className='w-full h-full flex p-4'>
							<Avatar
							img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
							rounded={true}
							>
								<div className="space-y-1 font-medium text-white text-left">
									<div>
									Name Surname
									</div>
									<div className="text-sm text-gray-400">
									Fullstack developer
									</div>
								</div>
							</Avatar>
						</div>
						<div className='w-full h-full flex p-4'>
							<Avatar
							img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
							rounded={true}
							>
								<div className="space-y-1 font-medium text-white text-left">
									<div>
									Name Surname
									</div>
									<div className="text-sm text-gray-400">
									Backend developer
									</div>
								</div>
							</Avatar>
						</div>
					</div>
					<div className='w-full h-1/3 flex flex-col sm:flex-row'>
						<div className='w-full h-full flex p-4'>
							<Avatar
							img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
							rounded={true}
							>
								<div className="space-y-1 font-medium text-white text-left">
									<div>
									Name Surname
									</div>
									<div className="text-sm text-gray-400">
									Designer
									</div>
								</div>
							</Avatar>
						</div>
						<div className='w-full h-full flex p-4'>
							<Avatar
							img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							rounded={true}
							>
								<div className="space-y-1 font-medium text-white text-left">
									<div>
									Name Surname
									</div>
									<div className="text-sm text-gray-400">
									Tester
									</div>
								</div>
							</Avatar>
						</div>
					</div>
				</div>
				<div className='rounded-lg p-4 h-full flex flex-col justify-center items-center w-3/5 bg-neutral-800 sm:w-4/5 md:w-3/5 xl:mb-0 xl:w-2/5' style={{minWidth: '300px'}}>
					<div className='w-full h-1/2 flex flex-col sm:flex-row'>
						<div className='w-full h-full p-4 flex justify-start items-center sm:w-1/2'>
							<Avatar
							img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
							size={"lg"}
							>
								<div className="space-y-1 font-medium text-white text-left">
									<h3 className='text-zinc-400 text-2xl font-bold'>
										React
									</h3>
								</div>
							</Avatar>
						</div>
						<div className='w-full h-full p-4 flex justify-start items-center sm:w-1/2'>
							<Avatar
							img="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
							size={"lg"}
							>
								<div className="space-y-1 font-medium text-white text-left">
									<h3 className='text-zinc-400 text-2xl font-bold'>
										JS
									</h3>
								</div>
							</Avatar>
						</div>
					</div>
					<div className='w-full h-1/2 flex flex-col sm:flex-row'>
						<div className='w-full h-full p-4 flex justify-start items-center sm:w-1/2'>
							<Avatar
							img="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"
							size={"lg"}
							>
								<div className="space-y-1 font-medium text-white text-left">
									<h3 className='text-zinc-400 text-2xl font-bold'>
										TailWind
									</h3>
								</div>
							</Avatar>
						</div>
						<div className='w-full h-full p-4 flex justify-start items-center sm:w-1/2'>
							<Avatar
							img="https://flowbite.com/docs/images/logo.svg"
							size={"lg"}
							>
								<div className="space-y-1 font-medium text-white text-left">
									<h3 className='text-zinc-400 text-2xl font-bold'>
										Flowbite
									</h3>
								</div>
							</Avatar>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center mb-32' id="about">
				<h2 className='text-6xl text-slate-50/80 font-light mb-8 2xl:text-7xl xl:mb-12'>О нас</h2>
				<div className='w-4/5 h-full flex flex-col md:flex-row md:w-5/6 xl:w-11/12'>
					<div className='w-full h-full md:mr-4 xl:mr-8'>
						<div className='h-1/3 flex mb-4'>
							<div className='h-full w-12 mr-4 flex justify-center items-center 2xl:w-16'>
								<svg className='h-1/3' aria-hidden="true" fill="none" stroke="#eee" stroke-width="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</div>
							<div className='h-full w-full'>
								<p className='text-left text-zinc-100 font-light text-base sm:text-lg md:text-base lg:text-lg 2xl:text-xl'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero molestias quas aspernatur at a quaerat officiis quo impedit commodi labore ex perspiciatis assumenda obcaecati ad earum, magni delectus quidem.
								</p>
							</div>
						</div>
						<div className='h-1/3 flex mb-4'>
							<div className='h-full w-12 mr-4 flex justify-center items-center 2xl:w-16'>
								<svg className='h-1/3' aria-hidden="true" fill="none" stroke="#eee" stroke-width="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</div>
							<div className='h-full w-full flex justify-start items-start'>
								<p className='text-left text-zinc-100 font-light text-base sm:text-lg md:text-base lg:text-lg 2xl:text-xl'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero molestias quas aspernatur at a quaerat officiis quo impedit commodi labore ex perspiciatis assumenda obcaecati ad earum, magni delectus quidem.
								</p>
							</div>
						</div>
						<div className='h-1/3 flex mb-4'>
							<div className='h-full w-12 mr-4 flex justify-center items-center 2xl:w-16'>
								<svg className='h-1/3' aria-hidden="true" fill="none" stroke="#eee" stroke-width="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</div>
							<div className='h-full w-full flex justify-start items-center'>
								<p className='text-left text-zinc-100 font-light text-base sm:text-lg md:text-base lg:text-lg 2xl:text-xl'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero molestias quas aspernatur at a quaerat officiis quo impedit commodi labore ex perspiciatis assumenda obcaecati ad earum, magni delectus quidem.
								</p>
							</div>
						</div>
					</div>
					<div className='w-full h-full'>
						<div className='h-1/3 flex mb-4'>
							<div className='h-full w-12 mr-4 flex justify-center items-center 2xl:w-16'>
								<svg className='h-1/3' aria-hidden="true" fill="none" stroke="#eee" stroke-width="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</div>
							<div className='h-full w-full flex justify-start items-center'>
								<p className='text-left text-zinc-100 font-light text-base sm:text-lg md:text-base lg:text-lg 2xl:text-xl'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero molestias quas aspernatur at a quaerat officiis quo impedit commodi labore ex perspiciatis assumenda obcaecati ad earum, magni delectus quidem.
								</p>
							</div>
						</div>
						<div className='h-1/3 flex mb-4'>
							<div className='h-full w-12 mr-4 flex justify-center items-center 2xl:w-16'>
								<svg className='h-1/3' aria-hidden="true" fill="none" stroke="#eee" stroke-width="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</div>
							<div className='h-full w-full flex justify-start items-center'>
								<p className='text-left text-zinc-100 font-light text-base sm:text-lg md:text-base lg:text-lg 2xl:text-xl'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero molestias quas aspernatur at a quaerat officiis quo impedit commodi labore ex perspiciatis assumenda obcaecati ad earum, magni delectus quidem.
								</p>
							</div>
						</div>
						<div className='h-1/3 flex'>
							<div className='h-full w-12 mr-4 flex justify-center items-center 2xl:w-16'>
								<svg className='h-1/3' aria-hidden="true" fill="none" stroke="#eee" stroke-width="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</div>
							<div className='h-full w-full flex justify-start items-center'>
								<p className='text-left text-zinc-100 font-light text-base sm:text-lg md:text-base lg:text-lg 2xl:text-xl'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero molestias quas aspernatur at a quaerat officiis quo impedit commodi labore ex perspiciatis assumenda obcaecati ad earum, magni delectus quidem.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center justify-between mb-16 lg:mb-32' id="roadmap">
				<h2 className='text-6xl text-slate-50/80 font-light mb-16 xl:text-7xl'>RoadMap</h2>
				<div className='w-4/5 sm:mb-4' style={{maxWidth: '1150px'}}>
					<Timeline horizontal={true}>
						<Timeline.Item>
							<Timeline.Point/>
							<Timeline.Content>
							<Timeline.Title className='text-white text-left'>
								Lorem ipsum v1.0.0
							</Timeline.Title>
							<Timeline.Time className='flex text-left'>
								Released on March 2, 2023
							</Timeline.Time>
							<Timeline.Body className='text-left'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error aspernatur.
							</Timeline.Body>
							</Timeline.Content>
						</Timeline.Item>
						<Timeline.Item>
							<Timeline.Point/>
							<Timeline.Content>
							<Timeline.Title className='text-white text-left'>
								Lorem ipsum v1.2.0
							</Timeline.Title>
							<Timeline.Time className='flex text-left'>
								Released on March 2, 2023
							</Timeline.Time>
							<Timeline.Body className='text-left'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error aspernatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							</Timeline.Body>
							</Timeline.Content>
						</Timeline.Item>
						<Timeline.Item>
							<Timeline.Point/>
							<Timeline.Content>
							<Timeline.Title className='text-white text-left'>
								Lorem ipsum v1.2.1
							</Timeline.Title>
							<Timeline.Time className='flex text-left'>
								Released on March 2, 2023
							</Timeline.Time>
							<Timeline.Body className='text-left'>
								Lorem ipsum, dolor sit amet consectetur.
							</Timeline.Body>
							</Timeline.Content>
						</Timeline.Item>
					</Timeline>
				</div>
				<div className='w-4/5' style={{maxWidth: '1150px'}}>
					<Timeline horizontal={true}>
						<Timeline.Item>
							<Timeline.Point/>
							<Timeline.Content>
							<Timeline.Title className='text-white text-left'>
								Lorem ipsum v2.0.0
							</Timeline.Title>
							<Timeline.Time className='flex text-left'>
								Released on March 2, 2023
							</Timeline.Time>
							<Timeline.Body className='text-left'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error aspernatur. Lorem ipsum, dolor sit.
							</Timeline.Body>
							</Timeline.Content>
						</Timeline.Item>
						<Timeline.Item>
							<Timeline.Point/>
							<Timeline.Content>
							<Timeline.Title className='text-white text-left'>
								Lorem ipsum v3.2.0
							</Timeline.Title>
							<Timeline.Time className='flex text-left'>
								Released on March 2, 2023
							</Timeline.Time>
							<Timeline.Body className='text-left'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							</Timeline.Body>
							</Timeline.Content>
						</Timeline.Item>
						<Timeline.Item>
							<Timeline.Point/>
							<Timeline.Content>
							<Timeline.Title className='text-white text-left'>
								Lorem ipsum v3.6.9
							</Timeline.Title>
							<Timeline.Time className='flex text-left'>
								Released on March 2, 2023
							</Timeline.Time>
							<Timeline.Body className='text-left'>
								Lorem ipsum, dolor sit amet consectetur. Error aspernatur.
							</Timeline.Body>
							</Timeline.Content>
						</Timeline.Item>
					</Timeline>
				</div>
			</div>
			<footer class="p-4 bg-zinc-800 sm:p-6">
			<div class="md:flex md:justify-between">
				<div class="mb-6 md:mb-0">
					<a href="https://flowbite.com/" class="flex items-center">
						<img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
						<span class="self-center text-2xl font-normal whitespace-nowrap text-white">Название</span>
					</a>
				</div>
				<div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-1">
					<div>
						<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Lorem</h2>
						<ul class="text-gray-400">
							<li class="mb-4">
								<a href="https://flowbite.com/" class="hover:underline">Lorem</a>
							</li>
							<li>
								<a href="https://tailwindcss.com/" class="hover:underline">Lorem ipsum</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr class="my-6 border-gray-500 sm:mx-auto lg:my-8" />
			<div class="sm:flex sm:items-center sm:justify-between">
				<span class="text-sm text-gray-100 sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">Название™</a>.
				</span>
				<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
					<a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
						<svg class="w-5 h-5" fill="#eee" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
						<span class="sr-only">Facebook page</span>
					</a>
					<a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
						<svg class="w-5 h-5" fill="#eee" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
						<span class="sr-only">Instagram page</span>
					</a>
					<a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
						<svg class="w-5 h-5" fill="#eee" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
						<span class="sr-only">Twitter page</span>
					</a>
					<a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
						<svg class="w-5 h-5" fill="#eee" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
						<span class="sr-only">GitHub account</span>
					</a>
				</div>
			</div>
		</footer>
		</div>
	);
}

export default App;
