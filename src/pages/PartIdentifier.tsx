
import React, { useState } from 'react';
import { Upload, Camera, Search, Info, X, CarFront } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import CameraCapture from '@/components/CameraCapture';

interface SimilarPart {
  id: string;
  name: string;
  image: string;
  compatibility: string;
  price: number;
}

const PartIdentifier = () => {
  const { toast } = useToast();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Enhanced car part images using Unsplash IDs
  const carPartImages = [
    'photo-1602982469756-461a3fcf896f', // Car engine close-up
    'photo-1609521263047-f8f205293f24', // Chrome car parts
    'photo-1583121274602-3e2820c69888', // Engine details
    'photo-1619252584172-a83a949b6efd', // Car brakes
    'photo-1619468129361-605ebea04b44', // Engine bay
    'photo-1617886322168-72b886573c06', // Dashboard
    'photo-1611016186353-9af58c69a533', // Suspension parts
    'photo-1639414303304-6e53957c68e4', // Detailed engine components
  ];

  // Sample data for similar parts with improved images
  const similarParts: SimilarPart[] = [
    {
      id: '1',
      name: 'Front Brake Caliper',
      image: carPartImages[3],
      compatibility: 'Honda Civic 2018-2022',
      price: 89.99
    },
    {
      id: '2',
      name: 'Brake Caliper Assembly',
      image: carPartImages[3],
      compatibility: 'Toyota Camry 2017-2021',
      price: 94.50
    },
    {
      id: '3',
      name: 'Performance Brake Caliper',
      image: 'photo-1619468129361-605ebea04b44',
      compatibility: 'Multiple Models',
      price: 129.99
    },
    {
      id: '4',
      name: 'Rear Brake Caliper',
      image: 'photo-1617886322168-72b886573c06',
      compatibility: 'Honda Accord 2019-2023',
      price: 79.95
    },
    {
      id: '5',
      name: 'OEM Replacement Caliper',
      image: 'photo-1583121274602-3e2820c69888',
      compatibility: 'Nissan Altima 2016-2020',
      price: 84.75
    },
    {
      id: '6',
      name: 'Economy Brake Caliper',
      image: 'photo-1611016186353-9af58c69a533',
      compatibility: 'Multiple Models',
      price: 59.99
    },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
        setShowResults(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target?.result as string);
        setShowResults(false);
      };
      reader.readAsDataURL(e.dataTransfer.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const clearImage = () => {
    setPreviewImage(null);
    setShowResults(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const identifyPart = () => {
    if (!previewImage) {
      toast({
        title: "No image selected",
        description: "Please upload an image first.",
        variant: "destructive"
      });
      return;
    }

    setIsIdentifying(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      setIsIdentifying(false);
      setShowResults(true);
      toast({
        title: "Part identified!",
        description: "We found similar parts in our database.",
      });
    }, 2000);
  };

  const handleTakePhoto = () => {
    setShowCamera(true);
  };

  const handlePhotoCapture = (imageSrc: string) => {
    setPreviewImage(imageSrc);
    setShowCamera(false);
    setShowResults(false);
    toast({
      title: "Photo captured",
      description: "Ready to identify this part.",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
          <CarFront className="mr-2 h-8 w-8 text-autoparts-blue" />
          Auto Part Identifier
        </h1>
        <p className="text-gray-600 mb-8">Upload a photo of your car part and our AI will identify it for you.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Upload Interface */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="upload" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upload">Upload Image</TabsTrigger>
                <TabsTrigger value="camera">Take Photo</TabsTrigger>
              </TabsList>
              <TabsContent value="upload">
                <Card>
                  <CardContent className="p-6">
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      accept="image/*" 
                      onChange={handleFileUpload} 
                      className="hidden"
                    />
                    
                    {!previewImage ? (
                      <div 
                        className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-autoparts-blue transition-colors"
                        onClick={triggerFileInput}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                      >
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Drop your image here or click to browse</h3>
                        <p className="text-sm text-gray-500">Supports JPG, PNG and WEBP (max 10MB)</p>
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="absolute top-2 right-2 z-10">
                          <Button variant="destructive" size="icon" onClick={clearImage}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <img 
                          src={previewImage} 
                          alt="Car part preview" 
                          className="w-full rounded-lg" 
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="camera">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 cursor-pointer hover:border-autoparts-blue transition-colors" onClick={handleTakePhoto}>
                      <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Take a photo now</h3>
                      <p className="text-sm text-gray-500">Align the part in the center of the frame</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-autoparts-blue hover:bg-autoparts-lightblue"
                onClick={identifyPart}
                disabled={!previewImage || isIdentifying}
              >
                {isIdentifying ? (
                  <>Identifying Part...</>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" /> 
                    Identify Part
                  </>
                )}
              </Button>
            </div>

            {showResults && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Identification Results</h2>
                <div className="bg-gray-50 p-6 rounded-lg border mb-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img 
                        src={`https://source.unsplash.com/${carPartImages[0]}`} 
                        alt="Identified part" 
                        className="w-full rounded-md"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold mb-2">Front Brake Caliper</h3>
                      <p className="text-gray-600 mb-4">
                        A brake caliper is part of the disc brake system found on many modern vehicles. 
                        It houses the brake pads and pistons that clamp the pads against the brake rotor to stop the wheel.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-500">Common Locations</Label>
                          <p>Attached to the wheel assembly, near the brake rotor</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-500">Typical Symptoms When Failing</Label>
                          <p>Squealing brakes, uneven braking, vehicle pulling to one side</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">Similar Parts</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {similarParts.map((part) => (
                    <Card key={part.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-36 bg-gray-100 p-3 flex items-center justify-center">
                        <img 
                          src={`https://source.unsplash.com/${part.image}`} 
                          alt={part.name} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm">{part.name}</h4>
                        <p className="text-xs text-gray-500">{part.compatibility}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-bold text-autoparts-blue">${part.price}</span>
                          <Button variant="outline" size="sm" className="text-xs">View</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Tips and Recent Identifications */}
          <div>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Tips for Better Results</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-autoparts-blue rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span>Ensure good lighting when taking photos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-autoparts-blue rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span>Clean the part before photographing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-autoparts-blue rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span>Capture multiple angles if possible</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-autoparts-blue rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <span>Include any visible part numbers in your photos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Recently Identified Parts</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0">
                      <img 
                        src={`https://source.unsplash.com/${carPartImages[2]}`} 
                        alt="Air Filter" 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Air Filter</h4>
                      <p className="text-sm text-gray-500">Toyota Corolla 2020</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0">
                      <img 
                        src={`https://source.unsplash.com/${carPartImages[4]}`} 
                        alt="Alternator" 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Alternator</h4>
                      <p className="text-sm text-gray-500">Ford F-150 2019</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0">
                      <img 
                        src={`https://source.unsplash.com/${carPartImages[6]}`} 
                        alt="Fuel Pump" 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Fuel Pump</h4>
                      <p className="text-sm text-gray-500">Honda Civic 2018</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert className="mt-6 bg-blue-50">
              <Info className="h-4 w-4 text-autoparts-blue" />
              <AlertDescription>
                Need help identifying a part? Call our expert hotline at <span className="font-semibold">1-800-AUTO-PART</span>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>

      {/* Camera Component */}
      {showCamera && (
        <CameraCapture 
          onCapture={handlePhotoCapture}
          onClose={() => setShowCamera(false)}
        />
      )}
    </Layout>
  );
};

export default PartIdentifier;
