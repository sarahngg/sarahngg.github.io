/**
 * Mandatory fields:
 * id (unique), title, description
 */

const projectList = [
	{
		"id": "portfolio",
		"title": "My Portfolio",
		"description": "This website!",
		"role": "Frontend Developer",
		"technologies": ["ReactJS", "Material-UI v5", "GitHub Pages"],
		"image": "https://source.unsplash.com/random/640x360/?minimalist",
		"date": 2021,
		"blurb": "This is a website showcasing my projects and roles",
		"links" : {
			"trust the recursion" : "https://sarahngg.github.io/",
			"repo" : "https://github.com/sarahngg/sarahngg.github.io"
		}
	},
	{
		"id": "chat-room",
		"title": "Chat Room App",
		"description": "A full-stack chat room application",
		"role": "Fullstack Developer",
		"technologies": ["JavaScript", "Node.js", "MongoDB", "CSS"],
		"image": "https://source.unsplash.com/random/640x360/?phone+app+message",
		"date": 2020,
		"blurb": "Created a Single-page Application with vanilla JavaScript without frontend libraries or frameworks. Built the GUI with CSS. Implemented WebSocket client and server for communication. Set up a MongoDB database for the application, created REST endpoints for reading objects from the database. Implemented a simple authentication mechanism, protected server resources from unauthorized users by using session cookies, sanitize user input to defend against Cross-Site Scripting attacks."
	},
	{
		"id": "community-centre",
		"title": "Community Centre Database",
		"description": "Manage classes, memberships, and equipment",
		"role": "Database Developer",
		"technologies": ["SQL", "CSS"],
		"image": "https://res.cloudinary.com/sng/image/upload/v1630430587/portfolio/cc.png",
		"date": 2020,
		"blurb": "Designed, implemented, and populated a relational database application using SQL*Plus, PHP, and HTML",
		"links" : {
			"demo link" : "https://www.students.cs.ubc.ca/~sarahn26/cc.php"
		}
	},
	{
		"id": "gh-issues",
		"title": "GitHub Issues Viewer",
		"description": "A frontend app to view issues of a public repo",
		"role": "Frontend Developer",
		"technologies": ["ReactJS", "Redux", "GitHub API", "GitHub Pages"],
		"image": "https://res.cloudinary.com/sng/image/upload/v1630370176/portfolio/gh.png",
		"date": 2019,
		"blurb": "The web application contains a search page with a search bar where users can paste a piblic GitHub repo URL. Using GitHub Issues API, the results page displays all (open, closed, pull requests) issues from the search query, and they are filterable by issue types. Issue types are indicated using the icons. Fetching errors are covered.",
		"links" : {
			"repo" : "https://github.com/sarahngg/gh-issues-viewer",
			"demo link" : "https://sarahngg.github.io/gh-issues-viewer/"
		}
	},
	{
		"id": "learnoncology",
		"title": "LearnOncology.ca",
		"description": "Educational resource about oncology management",
		"role": "Webmaster",
		"image": "https://res.cloudinary.com/sng/image/upload/b_rgb:ffffff,bo_100px_solid_rgb:ffffff/v1630358741/portfolio/lo.png",
		"blurb": "I decreased the load time by 75% through migrating content from the old Wordpress site to Webflow. I redesigned the learning resources and its templates using CSS concepts in Webflow. As non-technical content editors would be adding contents to the site, I created quick guides and detailed tutorial documentations. In addition, I managed SEO and integrated the site with Google Analytics.",
		"links" : {
			"link" : "https://learnoncology.ca"
		}
	},
  {
		"id": "project-x",
		"title": "Project X",
		"description": "Confidential",
		"image": "https://source.unsplash.com/random/640x360/?secret",
		"date": 2021,
		"blurb": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
	}
]

export default projectList;