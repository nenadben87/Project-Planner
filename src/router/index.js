import { createRouter, createWebHistory } from 'vue-router'
import '../assets/global.css'
import HomeView from '../views/HomeView.vue'
import NewProject from '../views/NewProject.vue'
import Completed from '../views/Completed.vue'
import Ongoing from '../views/Ongoing.vue'
import Projects from '../views/projects/Projects.vue'
import SingleProject from '../views/projects/SingleProject.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/new-project',
    name: 'NewProject',
    component: NewProject
  },
  {
    path: '/completed',
    name: 'Completed',
    component: Completed
  },
  {
    path: '/ongoing',
    name: 'Ongoing',
    component: Ongoing
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    props: true
  },
  {
    path: '/projects/:id',
    name: 'SingleProject',
    component: SingleProject,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


