/**
 * Created by githop on 11/13/16.
 */

export interface CardInfo {
  title: string
  href?: string
  date: string
  description: string
  position?: string
  accomplishments?: Array<{text: string}>
}

export interface ResumeCard {
  title: string
  content: Array<CardInfo>
}

export const experience: ResumeCard = {
  title: 'Professional Experience',
  content: [
    {
      title: 'In the Telling',
      href: 'https://inthetelling.com/',
      date: 'Current',
      description: 'In the Telling provides high quality course content to universities and businesses. Main product (the Narrasys Producer) enables universities to create interactive media experiences centered around video, all online (similar to a traditional non-linear editor). Application is written in AngularJS client with a Rails API server and MongoDB.</p><p>A typical day consists of working with an agile team to build new features and maintain/ refactoring existing features.',
      position: 'Front End Engineer',
      accomplishments: [
        { text: 'Design, implement, and test new features' },
        { text: 'Build internal tools for development team to facilitate testing, release and development (version control / doc generation, source code / template generation, perf / stress testing and optimization)' },
        { text: 'Collaborate with non-technical team members outside of agile team for product development (film editors, marketing / sales team)' }
      ]
    },
    {
      title: 'Briebug Solultions',
      href: 'http://briebugsoftwaresolutions.com/',
      date: 'September 2015 - Short Term Contract',
      position: 'Full stack developer - PHP/JS',
      description: 'Briebug Solutions specializes in providing business applications solutions with the MEAN stack. Briebug utilizes a test driven approach to software development in order to produce maintainable, reusable and modular codebases. Toolchain includes NodeJS, AngularJS, Gulp, Karma/Mocha, MongoDB as well as other tools if necessary to provide an appropriate solution.'
    },
    {
      title: 'Tranheroic',
      href:'http://trainheroic.com/',
      date: 'December 2014 - June 2015',
      position: 'Software Engineer',
      description: 'TrainHeroic is a startup specializing in fitness and coach/gym driven workout programs located in Boulder, CO. Product portfolio consists of three web apps, (coach/athlete portal and marketplace) and an iPhone app. Server stack consists of of a monolith PHP app being replaced by a Laravel API. Coach portal and marketplace client apps are AngularJS, athlete portal is currently being rewritten in Angular.',
      accomplishments: [
        { text: 'Contribute to day to day development on agile team.' },
        { text: 'Designed, developed, implemented gulp based build and optimization process for angular app.' },
        { text: 'Established use of AngularJS best practices in client apps (Controller As syntax, Module pattern, nested views with ui-router..etc).' },
        { text: 'Implemented automated build process in TeamCity.' },
        { text: 'Developed protractor testing plan for angular client apps.' },
        { text: 'Led team discussion and adoption of internal style guide.' }
      ]
    },
    {
      title: 'Independent Ruby Contractor',
      date: 'August 2014 - December 2015',
      description: 'Worked on contract basis developing custom software for small businesses in the Boulder area.'
    }
  ]
};

export const sideProjects: ResumeCard = {
  title: 'Side Projects',
  content: [
    {
      title: 'githop.com (Angular 2 version)',
      href: 'http://githop.com',
      date: 'November 2016',
      description: 'Update of my personal blog / website to Angular 2 with a Rails api backend. Client app is built with angular-cli and features lazily loaded modules and Ahead of Time Compilation. Source code: (<a href="https://github.com/githop/githop-ng2" target="_blank" rel="noreferrer noopener">client</a> / <a href="https://github.com/githop/githop-api" target="_blank" rel="noreferrer noopener">server</a>)'
    },
    {
      title: 'Sierpinski Triangle',
      href: 'http://githop.github.io/sierpinski-canvas/',
      date: 'March 2016',
      description: 'Side project of drawing a <a href="https://en.wikipedia.org/wiki/Sierpinski_triangle">sierpinski triangle</a> recursively with Javascript and HTML5 canvas. <a href="https://github.com/githop/sierpinski-canvas">Source code</a>.'
    },
    {
      title: 'Realtime Scrum Poker',
      href: 'https://github.com/githop/realtime-scrumpoker',
      date: 'October 2015',
      description: 'Fun side project for teams to play scrum poker together in person. Emphasis on using websockets to make game real time; e.g. players can ‘flip’ their cards over to reveal their estimate. Designed for players to use mobile device as input controller while game is viewed on projector or monitor. <a href="https://github.com/githop/realtime-scrumpoker">Source code</a>.'
    },
    {
      title: 'githop.com',
      href: 'http://githop.com',
      date: 'June 2015',
      description: 'My personal website / blog CMS. AngularJS on the client and Rails for the API server. Angular client uses ES6, Application Cache for offline access, and JWT token authentication. The Rails server is JSON only, blog posts are modeled as SQL tables and blog post text is analyzed with my sentiment analysis algorithm (see post 7). App is hosted via DigitalOcean where I setup and maintain an Ubuntu Linux instance with NGINX server to proxy Rails with Postgres DB. Blog posts are created via POST request from custom Google Doc plugin and edited via Angular client. Source code: client / server.'
    },
    {
      title: 'Padded Pockets',
      href: 'https://floating-springs-6532.herokuapp.com/',
      date: 'November 2014',
      description: 'Begun as personal project after 6 weeks of Dev Bootcamp. Originally a <a href="https://hidden-shore-1353.herokuapp.com/">Sinatra app</a>, it has since gone through several iterations; a <a>Rails app</a>, then 2 AngularJS / Rails hybrid apps. Angular <a href="https://pocketspadded.herokuapp.com/#/">v1</a>, <a href="https://floating-springs-6532.herokuapp.com/#/">v2</a>. In all versions the app pulls data from a 3rd party API, caches it, then returns the data to the user. The Angular/Rails versions use Rails to gather and serialize the data as JSON, which is consumed by the Angular client. All politician images are hosted on Google drive and fetched via API call from the Angular client.'
    },
    {
      title: 'SoundScript',
      href: 'https://github.com/dyoachim/soundscript',
      date: 'July 2014',
      description: 'Final group project at Dev Bootcamp. SoundScript is a tool for learning new languages via YouTube. Users can watch crowd sourced translations or upload translations of their own. Tools used were primarily JavaScript, the YouTube API, and a Rails server tying everything together.'
    }
  ]
};

export const talks: ResumeCard = {
  title: 'Community / Talks',
  content: [
    {
      title: 'BoulderJS Meetup - Functional Composition',
      href: 'http://www.meetup.com/Boulder-JS/events/232947542/',
      date: 'August 2016',
      description: 'Talk on how First class / Higher-order / pure functions allow for currying and point free composition. Final segment on writing async code with Tasks using folktale.js. Examples in Typescript.'
    },
    {
      title: 'Denver AngularJS Meetup - Components in AngularJS 1.5',
      href: 'http://www.meetup.com/RockyMountainAngularJS/events/230153321/',
      date: 'April 2016',
      description: 'Slide show on example todos AngularJS app featuring the new .component() method. Showcasing routing with the Angular Component router, component to component communication via the directive API.'},
    {
      title: 'Denver AngularJS Meetup - Async Programming ES6 Generators',
      href: 'http://www.meetup.com/RockyMountainAngularJS/events/227891195/',
      date: 'January 2016',
      description: 'Presentation on using generators to implement iterables, observables and coroutines. Live coding with slides and examples in nodeJS and in the browser with Angular.'
    },
    {
      title: 'Denver AngularJS Meetup - ES6 Modules with AngularJS 1.x',
      href: 'http://www.meetup.com/RockyMountainAngularJS/events/225453182/',
      date: 'October 2015',
      description: 'Presented to Meetup group on how to use ES6 with AngularJS today. Presentation detailed how to setup a transpiled build process with Babel, JSPM and Gulp along with code examples on how to use new ES6 with Angular in particular.'
    },
    {
      title: 'Boulder AngularJS Meetup - Rails / Angular app: Padded pockets',
      href: 'http://www.meetup.com/RockyMountainAngularJS/photos/25863001/#433553204',
      date: 'January 2015',
      description: 'Delivered talk on experiences using AngularJS with a Rails API. Presentation focused on PaddedPockets Rails and Angular architecture,  3rd party services,  development and design decisions along the way, followed by a Q&A session regarding the app.'
    },
    {
      title: 'Boulder Ruby Group - Ruby Newby Beginners Track',
      href: 'http://githop.github.io/slides_ruby_newby/',
      date: 'September 2014',
      description: 'Authored presentation at meetup group on basic ruby data structures; i.e. strings and numbers.  Talk includes blog post in Ruby Newby beginner’s series. <a href="http://rubybeginnerstrack.github.io/2014/10/15/basic-data-types.html" target="_blank" rel="noreferrer noopener">Blog post</a>'
    }
  ]
};

export const startup: ResumeCard = {
  title: 'Startup Competitions',
  content: [
    {
      title: '3rd Pace - 2014 Marijuana Tech Startup competition',
      href: 'http://www.cannabrokersnetwork.com/',
      date: '2014',
      description: '2 day hackathon style startup competition. Cannabrokers is a B2B online market for the cannabis industry. Built app on freelance basis and is still under development. Featured in BBC, Yahoo Finance.'
    }
  ]
};

export const other: ResumeCard = {
  title: 'Other',
  content: [
    {
      title: 'Partner Professional Solutions',
      date: '2009 - 2014',
      description: 'Partner Professional Solutions is predominantly a Healthcare IT recruiting company based in Cincinnati, OH. Roles over tenure included: intern, sales-researcher, IT support, Head of IT. Responsibilities included vendor relations, policy formation/implementation, admin / technical roles.'
    }
  ]
};

export const education: ResumeCard = {
  title: 'Education',
    content: [
      {
      title: 'Dev Bootcamp',
      date: 'April - July 2014',
      description: 'Dev Bootcamp is an intense 12 week program designed to instill a foundation for a career in web development. In addition, DBC emphasises non-technical interpersonal skills such as team integration and engineering empathy.',
      },
      {
        title: 'Ohio University',
        date: '2012',
        description: 'Bachelor of Arts Philosophy',
      }
  ]
};
