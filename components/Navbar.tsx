import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <nav>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton mode='modal'>
                    <button className='rounded border border-gray-400 px-3 py-0.5'>
                        Sign in
                    </button>
                </SignInButton>
            </SignedOut>
        </nav>
    );
};

export default Navbar;