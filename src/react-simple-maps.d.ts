declare module 'react-simple-maps' {
  import { ReactNode } from 'react'

  export interface ComposableMapProps {
    projectionConfig?: {
      scale?: number
      center?: [number, number]
      [key: string]: any
    }
    style?: React.CSSProperties
    children?: ReactNode
    [key: string]: any
  }

  export interface GeographyProps {
    geography?: any
    style?: {
      default?: React.CSSProperties
      hover?: React.CSSProperties
      pressed?: React.CSSProperties
    }
    tabIndex?: number
    [key: string]: any
  }

  export interface GeographiesProps {
    geography?: string | object
    children?: (data: { geographies: any[] }) => ReactNode
    [key: string]: any
  }

  export interface MarkerProps {
    coordinates: [number, number]
    children?: ReactNode
    [key: string]: any
  }

  export interface ZoomableGroupProps {
    zoom?: number
    center?: [number, number]
    children?: ReactNode
    [key: string]: any
  }

  export const ComposableMap: React.FC<ComposableMapProps>
  export const Geographies: React.FC<GeographiesProps>
  export const Geography: React.FC<GeographyProps>
  export const Graticule: React.FC<any>
  export const Sphere: React.FC<any>
  export const ZoomableGroup: React.FC<ZoomableGroupProps>
  export const Marker: React.FC<MarkerProps>
}




