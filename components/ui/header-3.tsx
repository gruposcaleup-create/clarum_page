'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { 
  CodeIcon, 
  GlobeIcon, 
  LayersIcon, 
  UserPlusIcon, 
  Users, 
  Star, 
  FileText, 
  Shield, 
  RotateCcw, 
  Handshake, 
  Leaf, 
  HelpCircle, 
  BarChart, 
  PlugIcon,
  Cpu,
  Atom,
  MousePointer2,
  BookOpen,
  Box,
  UserCircle
} from 'lucide-react';

type LinkItem = {
	title: string;
	href: string;
	icon: any;
	description?: string;
};

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('sticky top-0 z-50 w-full border-b border-white/10 transition-all duration-300', {
				'bg-black/95 backdrop-blur-lg border-white/20': scrolled,
				'bg-black': !scrolled,
			})}
		>
			<nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
				{/* Logo Section */}
				<div className="flex flex-1 items-center justify-start">
					<Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-105">
						<img src="/assets/logo.png" alt="Clarum Group" className="h-[40px] w-auto" />
						<span className="font-bold text-lg tracking-tight text-white hidden xl:block">Clarum Group</span>
					</Link>
				</div>
				
				{/* Centered Navigation */}
				<div className="hidden lg:flex flex-1 items-center justify-center">
					<NavigationMenu>
						<NavigationMenuList className="gap-1">
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/"
										className={cn(
											"group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-light tracking-tight transition-colors text-white/80 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none"
										)}
									>
										Home
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/research"
										className={cn(
											"group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-light tracking-tight transition-colors text-white/80 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none"
										)}
									>
										Our Research
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/publications"
										className={cn(
											"group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-light tracking-tight transition-colors text-white/80 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none"
										)}
									>
										Publications
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/models"
										className={cn(
											"group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-light tracking-tight transition-colors text-white/80 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none"
										)}
									>
										Models
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/people"
										className={cn(
											"group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-light tracking-tight transition-colors text-white/80 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none"
										)}
									>
										People
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				
				{/* Right Actions */}
				<div className="flex flex-1 items-center justify-end gap-4">
					<div className="hidden lg:flex items-center gap-4">
						<Link href="/blog" className="text-sm font-light tracking-tight text-white/70 hover:text-white transition-colors">
							Blog
						</Link>
						<Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black transition-all">
							Sign In
						</Button>
						<Button className="bg-white text-black hover:bg-white/90 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
							Join Lab
						</Button>
					</div>
					
					<Button
						size="icon"
						variant="ghost"
						onClick={() => setOpen(!open)}
						className="lg:hidden text-white hover:bg-white/10"
						aria-expanded={open}
						aria-controls="mobile-menu"
						aria-label="Toggle menu"
					>
						<MenuToggleIcon open={open} className="size-6" duration={300} />
					</Button>
				</div>
			</nav>
			
			<MobileMenu open={open} className="flex flex-col justify-between gap-8 h-[calc(100vh-4rem)]">
				<div className="flex flex-col gap-6 pt-4">
					<div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Knowledge Base</span>
            <div className="grid gap-2">
              {researchLinks.map((link) => (
                <ListItem key={link.title} {...link} className="hover:bg-white/10" />
              ))}
            </div>
					</div>
					
					<div className="space-y-4 pt-4 border-t border-white/10">
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Navigation</span>
            <div className="grid gap-1">
              {companyLinks.map((link) => (
                <Link 
                  key={link.title} 
                  href={link.href}
                  className="flex items-center gap-3 p-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all"
                  onClick={() => setOpen(false)}
                >
                  <link.icon className="size-5" />
                  <span className="font-medium">{link.title}</span>
                </Link>
              ))}
            </div>
					</div>
				</div>
				
				<div className="flex flex-col gap-3 pb-8">
					<Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 py-6 text-base">
						Sign In
					</Button>
					<Button className="w-full bg-white text-black py-6 text-base">
						Join Lab
					</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

function MobileMenu({ open, children, className, ...props }: any): React.ReactNode {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div id="mobile-menu" className="fixed top-16 right-0 bottom-0 left-0 z-40 bg-black/98 backdrop-blur-xl lg:hidden">
			<div className={cn("size-full p-6 overflow-y-auto animate-in slide-in-from-top-4 duration-300", className)} {...props}>
				{children}
			</div>
		</div>,
		document.body,
	) as React.ReactNode;
}

function ListItem({ title, description, icon: Icon, className, href, ...props }: any) {
	return (
		<NavigationMenuLink asChild>
			<Link 
        href={href}
        className={cn(
          "flex flex-row gap-4 rounded-xl p-3 transition-all duration-200",
          "hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]",
          "border border-transparent hover:border-white/10",
          className
        )} 
        {...props}
      >
				<div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 shadow-inner group-hover:bg-white/20 transition-colors">
					<Icon className="text-white size-5" />
				</div>
				<div className="flex flex-col justify-center">
					<span className="text-sm font-semibold text-white">{title}</span>
					{description && <span className="text-xs text-white/50 leading-relaxed max-w-[200px]">{description}</span>}
				</div>
			</Link>
		</NavigationMenuLink>
	);
}

const researchLinks: LinkItem[] = [
	{
		title: 'Advanced ML',
		href: '/research#machine-learning',
		description: 'Pushing the boundaries of neural architectures and reasoning.',
		icon: Cpu,
	},
	{
		title: 'Quantum Computing',
		href: '/research#quantum-computing',
		description: 'Harnessing quantum mechanics for exponential speedups.',
		icon: Atom,
	},
	{
		title: 'Human-AI Interaction',
		href: '/research#hci',
		description: 'Creating seamless interfaces for high-bandwidth bio-digital synergy.',
		icon: MousePointer2,
	},
	{
		title: 'Knowledge Graphs',
		href: '/research#knowledge',
		description: 'Structuring the world\'s information for machine understanding.',
		icon: GlobeIcon,
	},
];

const companyLinks: any[] = [
	{
		title: 'Publications',
		href: '/publications',
		icon: BookOpen,
	},
	{
		title: 'Models',
		href: '/models',
		icon: Box,
	},
	{
		title: 'People',
		href: '/people',
		icon: UserCircle,
	},
  {
		title: 'Careers',
		href: '/careers',
		icon: UserPlusIcon,
	},
];

function useScroll(threshold: number) {
	const [scrolled, setScrolled] = React.useState(false);
	const onScroll = React.useCallback(() => {
		setScrolled(window.scrollY > threshold);
	}, [threshold]);
	React.useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);
	React.useEffect(() => {
		onScroll();
	}, [onScroll]);
	return scrolled;
}
