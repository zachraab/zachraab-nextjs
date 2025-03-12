'use client';
import Headline from "./headline"
import EmblaCarousel from './embla-carousel/embla-carousel'
import { EmblaOptionsType } from 'embla-carousel'

export default function FeaturedProjects() {
    const OPTIONS: EmblaOptionsType = { 
        loop: true, 
        breakpoints: {
            '(min-width: 768px)': { align: 'center' } 
        }
    }
    const projects = [
        {
            title: "To-Do List",
            tech: "Elixir, Phoenix, PostgreSQL, Tailwind CSS",
            description: "This is a Phoenix LiveView web application that allows users to create and manage personalized lists by adding or removing items with ease.",
            url: "https://to-do-list.gigalixirapp.com/"
        },
        {
            title: "SQL Store",
            tech: "JavaScript, Next.js, React.js, MySQL",
            description: "A mock-up of an online store to simulate a shopping experience.",
            url: "https://github.com/zachraab/sql-store/"
        },
        {
            title: "Tech Blog",
            tech: "JavaScript, Express, MySQL",
            description: "A mock-up of a blog platform where users can create personalized profiles, with integrated user authentication and secure password encryption.",
            url: "https://github.com/zachraab/tech-blog/"
        }
    ]

    return (
        <section className="bg-gray-100 md:px-0">
            <div className="md:px-8 lg:px-40">
                <Headline content="Featured Projects" />
            </div>

            <EmblaCarousel slides={projects} options={OPTIONS} />
        </section>
    )
}