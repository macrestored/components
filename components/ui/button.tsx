// Import required files and dependencies
import theme from "../../styles/theme"
import styled from "styled-components"

// Declare ButtonProps interface
export interface ButtonProps {
	// * Is this the  main call to action on the page
	primary?: boolean
	// * What text color to use
	textColor?: string
	// * What background color to use
	backgroundColor?: string
	// * What color the text should change to on hover
	hoverTextColor?: string
	// * What color the background should change to on hover
	hoverBackgroundColor?: string
	// * How the button should transition on hover
	hoverTransition?: string
	// * Declare weight of button text
	weight?: number
	// * The size of the button
	size?: "small" | "medium" | "large"
	// * Custom padding if standard sizees aren't right
	customPadding?: string
	// * Decide on the thickness and color of the border
	border?: string
	// * Curve of the buttons corners
	borderRadius?: string
	// * Button contents
	label?: string
	// * Optional click handler
	onClick?: () => void
}

// Declare styled button
const BaseButton = styled.button<ButtonProps>`
	font-size: ${p => {
		switch (p.size) {
			case "small":
				return `.75rem;`
			case "medium":
				return `.875rem;`
			case "large":
				return `1rem;`
		}
	}}
	padding: ${p => {
		switch (p.size) {
			case "small":
				return `.3rem 1rem;`
			case "medium":
				return `.5rem 1.25rem;`
			case "large":
				return `.55rem 1.8rem;`
		}
	}}
	background: ${p =>
		p.primary ? theme.colors.primary[0] : theme.colors.white[0]};
	color: ${p => (p.primary ? theme.colors.white[0] : theme.colors.primary[0])};
	border: ${p =>
		p.primary
			? `2px solid transparent`
			: `2px solid ${theme.colors.primary[0]}`};
	font-weight: ${p => p.weight};
	border: ${p => p.border};
	border-radius: ${p => p.borderRadius};
	background: ${p => p.backgroundColor};
	color: ${p => p.textColor};
	padding: ${p => p.customPadding};
	transition: ${p => p.hoverTransition};
	text-align: center;
	text-decoration: none;
	white-space: nowrap;
	cursor: pointer;
	margin: 1rem;

	:hover {
		background: ${p =>
			p.primary ? theme.colors.primary[2] : theme.colors.primary[0]};
		background: ${p => p.hoverBackgroundColor};
		color: ${p => (p.primary ? theme.colors.white[0] : p.hoverTextColor)};
		transition: ${p => p.hoverTransition};
	}
`

// Declare Button export
export const Button: React.FC<ButtonProps> = ({
	primary = false,
	textColor,
	backgroundColor,
	hoverBackgroundColor,
	hoverTextColor = "#fff",
	hoverTransition = ".3s ease",
	weight = 400,
	border,
	size = "medium",
	customPadding,
	borderRadius,
	label = "Button",
	onClick,
	...props
}) => {
	return (
		<BaseButton
			backgroundColor={backgroundColor}
			hoverBackgroundColor={hoverBackgroundColor}
			hoverTextColor={hoverTextColor}
			textColor={textColor}
			primary={primary}
			weight={weight}
			size={size}
			customPadding={customPadding}
			border={border}
			borderRadius={borderRadius}
			type='button'
			onClick={onClick}
			{...props}>
			{label}
		</BaseButton>
	)
}
