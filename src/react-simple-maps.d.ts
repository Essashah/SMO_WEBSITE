declare module 'react-simple-maps' {
  import { ReactNode } from 'react'

  export interface ProjectionConfig {
    scale?: number
    center?: [number, number]
    rotate?: [number, number, number]
  }

  export interface ComposableMapProps {
    width?: number
    height?: number
    projectionConfig?: ProjectionConfig
    style?: React.CSSProperties
    children?: ReactNode
  }

  export interface ZoomableGroupProps {
    zoom?: number
    center?: [number, number]
    children?: ReactNode
  }

  export interface GeographyProps {
    geography?: any
    style?: {
      default?: React.CSSProperties
      hover?: React.CSSProperties
      pressed?: React.CSSProperties
    }
    tabIndex?: number
    onMouseEnter?: () => void
    onMouseLeave?: () => void
  }

  export interface MarkerProps {
    coordinates: [number, number]
    children?: ReactNode
  }

  export interface GeographiesProps {
    geography?: string | object
    children?: (params: { geographies: any[] }) => ReactNode
  }

  export const ComposableMap: React.FC<ComposableMapProps>
  export const Geographies: React.FC<GeographiesProps>
  export const Geography: React.FC<GeographyProps>
  export const Marker: React.FC<MarkerProps>
  export const ZoomableGroup: React.FC<ZoomableGroupProps>
  export const Graticule: React.FC<{ stroke?: string; strokeOpacity?: number; strokeWidth?: number }>
  export const Sphere: React.FC<{ fill?: string; stroke?: string; strokeOpacity?: number; strokeWidth?: number }>
}

