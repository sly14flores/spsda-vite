import { useDropzone } from 'react-dropzone'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography'; // CUSTOM ICON COMPONENT

import UploadOnCloud from '@/icons/UploadOnCloud'; // STYLED COMPONENT

import { RootStyle } from './styles'; // =======================================================================

// =======================================================================
export default function DropZone({
  onDrop
}) {
  const {
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: {
      'image/*': ['.png', '.gif', '.jpeg', '.jpg']
    },
    onDrop
  });
  return <RootStyle {...getRootProps({
    className: 'dropzone'
  })}>
      <UploadOnCloud sx={{
      fontSize: 38,
      color: 'text.secondary'
    }} />
      <Paragraph color="text.secondary">Drop your images here or</Paragraph>
      <H6 fontSize={16} color="primary.main">
        Select click to browse
      </H6>

      <input {...getInputProps()} placeholder="Select click to browse" />
    </RootStyle>;
}