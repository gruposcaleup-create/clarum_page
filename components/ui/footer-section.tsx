'use client';

import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Research',
		links: [
			{ title: 'Machine Learning', href: '/research' },
			{ title: 'Quantum Computing', href: '/research' },
			{ title: 'Human-AI Synergy', href: '/research' },
			{ title: 'Robotics & Perception', href: '/research' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About Clarum', href: '/about' },
			{ title: 'Our People', href: '/people' },
			{ title: 'Careers', href: '/careers' },
			{ title: 'Contact Us', href: '/contact' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Publications', href: '/publications' },
			{ title: 'Blog & News', href: '/blog' },
			{ title: 'Press Kit', href: '/brand' },
			{ title: 'Legal & Privacy', href: '/privacy' },
		],
	},
	{
		label: 'Social',
		links: [
			{ title: 'Twitter / X', href: '#' },
			{ title: 'LinkedIn', href: '#' },
			{ title: 'GitHub', href: '#' },
			{ title: 'Newsletter', href: '#' },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t border-white/10 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)] px-6 py-12 lg:py-16 text-white overflow-hidden">
			<div className="bg-white/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<Link href="/" className="text-3xl font-bold tracking-tight block text-white">
              Clarum<span className="text-[#0064E0]">.</span>
          </Link>
					<p className="text-white mt-8 text-sm md:mt-0 max-w-xs">
						Pioneering research at the intersection of artificial intelligence, quantum computing, and human-computer interaction.
						<br /><br />
						© {new Date().getFullYear()} Clarum Group. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0 text-white">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs font-bold tracking-widest uppercase text-white">{section.label}</h3>
								<ul className="text-white mt-4 space-y-3 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<Link
												href={link.href}
												className="hover:text-gray-300 inline-flex items-center transition-all duration-300 text-white"
											>
												{link.icon && <link.icon className="me-2 size-4" />}
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
