"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  itemsPerPageOptions?: number[];
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPageOptions = [10, 25, 50, 100]
}: PaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handleFirstPage = () => {
    if (currentPage > 1) {
      onPageChange(1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    if (currentPage < totalPages) {
      onPageChange(totalPages);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6 border-t border-gray-200">
      {/* Items per page selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Items per page</span>
        <Select value={itemsPerPage.toString()} onValueChange={(value) => onItemsPerPageChange(parseInt(value))}>
          <SelectTrigger className="w-20 h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {itemsPerPageOptions.map((option) => (
              <SelectItem key={option} value={option.toString()}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Page info */}
      <div className="text-sm text-gray-600">
        {startItem}-{endItem} of {totalItems} items
      </div>

      {/* Navigation controls */}
      <div className="flex items-center gap-2">
        {/* First page button */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleFirstPage}
          disabled={currentPage === 1}
          className="p-2 h-8 w-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </Button>

        {/* Previous page button */}
        <Button
          variant="outline"
          size="sm"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-3 h-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm">Previous</span>
        </Button>

        {/* Current page indicator */}
        <div className="flex items-center gap-1 px-3">
          <span className="text-sm font-medium text-gray-900">{currentPage}</span>
          <span className="text-sm text-gray-500">of {totalPages}</span>
        </div>

        {/* Next page button */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-3 h-8"
        >
          <span className="text-sm">Next</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>

        {/* Last page button */}
        <Button
          variant="outline"
          size="sm"
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
          className="p-2 h-8 w-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7m-8 0l7-7-7-7" />
          </svg>
        </Button>
      </div>
    </div>
  );
} 