import {
  FaBox,
  FaStar,
  FaTruck,
  FaCheck,
} from "react-icons/fa";

export default function ProductDetailsTabs() {
  return (
    <section id="product-details-tabs" className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          
          {/* Tabs Header */}
          <div className="border-b">
            <div className="flex overflow-x-auto">
              
              {/* Active Tab */}
              <button className="flex items-center gap-2 px-6 py-4 text-green-600 border-b-2 border-green-600 bg-green-50 font-medium whitespace-nowrap">
                <FaBox className="text-sm" />
                Product Details
              </button>

              <button className="flex items-center gap-2 px-6 py-4 text-gray-600 hover:text-green-600 hover:bg-gray-50 transition whitespace-nowrap">
                <FaStar className="text-sm" />
                Reviews (5)
              </button>

              <button className="flex items-center gap-2 px-6 py-4 text-gray-600 hover:text-green-600 hover:bg-gray-50 transition whitespace-nowrap">
                <FaTruck className="text-sm" />
                Shipping & Returns
              </button>

            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                About this Product
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Material: Polyester Blend <br />
                Colour Name: Multicolour <br />
                Department: Women
              </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Product Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-3">
                  Product Information
                </h4>

                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Category</span>
                    <span className="font-medium">Women&apos;s Fashion</span>
                  </li>

                  <li className="flex justify-between">
                    <span className="text-gray-500">Subcategory</span>
                    <span className="font-medium">Women&apos;s Clothing</span>
                  </li>

                  <li className="flex justify-between">
                    <span className="text-gray-500">Brand</span>
                    <span className="font-medium">DeFacto</span>
                  </li>

                  <li className="flex justify-between">
                    <span className="text-gray-500">Items Sold</span>
                    <span className="font-medium">651+ sold</span>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-3">
                  Key Features
                </h4>

                <ul className="space-y-2 text-sm text-gray-600">
                  
                  {[
                    "Premium Quality Product",
                    "100% Authentic Guarantee",
                    "Fast & Secure Packaging",
                    "Quality Tested",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheck className="text-green-600 w-4" />
                      {item}
                    </li>
                  ))}

                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}