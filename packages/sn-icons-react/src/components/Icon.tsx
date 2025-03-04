import React from 'react'
import { FlatIcon } from './flaticon/Icon'
import { FontAwesomeIcon } from './fontawesome/Icon'
import { ImageIcon } from './image/Icon'
import { MaterialIcon } from './materialui/Icon'

/**
 * Enum for icon types
 */
export enum iconType {
  /**
   * Material-ui icons
   */
  materialui,
  /**
   * Fontawesome icons
   */
  fontawesome,
  /**
   * Flaticon icons
   */
  flaticon,
  /**
   * Image icons
   */
  image,
}

interface IconProps {
  /**
   * Name of the icon
   */
  iconName: string
  /**
   * Type of the icon (name of the icon library e.g. fontawesome)
   * @default iconType.materialui
   */
  type?: iconType | null
  /**
   * Color of the icon
   * @default primary
   */
  color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'error' | 'disabled'
  /**
   * Size of the icon (only used on image icons)
   * @default 16
   */
  size?: 16 | 32
  /**
   * Font size of the icon (only used on icon font-based icons)
   * @default default
   */
  fontSize?: 'inherit' | 'default'
  /**
   * Classes object that is passed to the inner material-ui Icon component
   */
  classes?: object | null
  /**
   * Style object that is passed to the inner material-ui Icon component
   */
  style?: object | null
  /**
   * Called when the icon is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  /**
   * Additional class name
   */
  className?: string
}

/**
 * Main Icon component
 */
export class Icon extends React.Component<IconProps, {}> {
  /**
   * renders the component
   */
  public render() {
    const { type, color, size, classes, iconName, style, onClick, className, fontSize } = this.props
    switch (type) {
      case iconType.materialui:
        return (
          <MaterialIcon
            color={color}
            fontSize={fontSize}
            classes={classes}
            iconName={iconName}
            style={style}
            onClick={onClick ? e => onClick(e) : undefined}
            className={className}>
            {this.props.children ? this.props.children : null}
          </MaterialIcon>
        )
      case iconType.flaticon:
        return (
          <FlatIcon
            color={color}
            fontSize={fontSize}
            classes={classes}
            iconName={iconName}
            style={style}
            onClick={onClick ? e => onClick(e) : undefined}>
            {this.props.children ? this.props.children : null}
          </FlatIcon>
        )
      case iconType.fontawesome:
        return (
          <FontAwesomeIcon
            color={color}
            fontSize={fontSize}
            classes={classes}
            iconName={iconName}
            style={style}
            onClick={onClick ? e => onClick(e) : undefined}>
            {this.props.children ? this.props.children : null}
          </FontAwesomeIcon>
        )
      case iconType.image:
        return (
          <ImageIcon iconName={iconName} size={size} style={style} onClick={onClick ? e => onClick(e) : undefined}>
            {this.props.children ? this.props.children : null}
          </ImageIcon>
        )
      default:
        return (
          <MaterialIcon
            iconName={iconName}
            color={color ? color : 'primary'}
            fontSize={fontSize ? fontSize : 'default'}
            classes={classes ? classes : null}
            className={className}
            onClick={onClick ? e => onClick(e) : undefined}
            style={style}
          />
        )
    }
  }
}
