
import React, { useRef, useState, useEffect } from 'react';
import { Camera, X, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CameraCaptureProps {
  onCapture: (imageSrc: string) => void;
  onClose: () => void;
}

const CameraCapture = ({ onCapture, onClose }: CameraCaptureProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    const initCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
        });
        setStream(mediaStream);
        setHasPermission(true);
        
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.addEventListener('loadeddata', () => {
            setIsCameraReady(true);
          });
        }
      } catch (error) {
        console.error('Camera access denied or error:', error);
        setHasPermission(false);
      }
    };

    initCamera();

    return () => {
      // Clean up on unmount
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current && isCameraReady) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Draw video frame to canvas
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Convert canvas to data URL
        const photoDataUrl = canvas.toDataURL('image/jpeg');
        onCapture(photoDataUrl);
        
        // Stop all video streams
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
        }
      }
    }
  };

  const handleRetakePhoto = async () => {
    // Reinitialize the camera if needed
    if (!stream || stream.getTracks()[0].readyState === 'ended') {
      try {
        const newStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
        });
        setStream(newStream);
        if (videoRef.current) {
          videoRef.current.srcObject = newStream;
        }
      } catch (error) {
        console.error('Error reopening camera:', error);
      }
    }
  };

  if (hasPermission === false) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Camera Access Denied</h3>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <p className="mb-4">Please allow camera access to use this feature.</p>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-white text-xl font-bold">Take Photo</h2>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white hover:bg-opacity-20">
          <X className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="relative w-full max-w-2xl mx-auto">
          <video 
            ref={videoRef}
            className="w-full rounded-lg shadow-lg"
            autoPlay
            playsInline
          />
          <canvas ref={canvasRef} className="hidden" />
        </div>
      </div>
      
      <div className="p-6 flex justify-center space-x-4">
        <Button 
          variant="outline" 
          size="lg" 
          className="rounded-full w-12 h-12 p-0 border-2 border-white text-white hover:bg-white hover:bg-opacity-20"
          onClick={handleRetakePhoto}
        >
          <RefreshCcw className="h-6 w-6" />
        </Button>
        <Button 
          size="lg" 
          className="rounded-full w-16 h-16 p-0 bg-white hover:bg-gray-200"
          onClick={capturePhoto}
        >
          <div className="rounded-full w-14 h-14 border-4 border-autoparts-blue"></div>
        </Button>
      </div>
    </div>
  );
};

export default CameraCapture;
