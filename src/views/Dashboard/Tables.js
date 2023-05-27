/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState, useCallback, useEffect } from 'react'

// Chakra imports
import { Flex, Table, Tbody, Icon, Text, Th, Thead, Tr, Td, Box, Badge } from '@chakra-ui/react'

// Custom components
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'

// Table Components
import TablesProjectRow from 'components/Tables/TablesProjectRow'
import TablesTableRow from 'components/Tables/TablesTableRow'

// Data
import { tablesProjectData, tablesTableData } from 'variables/general'

// Icons
import { AiFillCheckCircle } from 'react-icons/ai'

import { countries, shipTypes, products, shipStatus, getRandomInt, getRandomArbitrary } from './Dashboard'

function Tables() {
  const countriesKeys = Object.keys(countries)
  const [shipWheel, setShipWheel] = useState(0)

  const interval = useCallback(() => {
    let counter = 0
    const id = setInterval(() => {
      //Ship wheel
      counter = (counter + 1) % shipStatus.length
      setShipWheel(counter)
    }, 1500)
    return id
  }, [setShipWheel])

  useEffect(() => {
    const intervalId = interval()
    console.log(intervalId)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <Flex direction="column" pt={{ base: '120px', md: '75px' }}>
      {/* MCP */}
      <Card overflowX={'auto'} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="lg" color="#fff" fontWeight="bold">
            Embarcações
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color="#fff" w="100%">
            <Thead>
              <Tr my=".8rem" ps="0px" color="gray.400">
                <Th ps="0px" color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  Nome
                </Th>
                <Th ps="0px" color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  Status
                </Th>
                <Th color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  Combustível
                </Th>
                <Th color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  Resfriador de Ar
                </Th>
                <Th color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  Vibração
                </Th>
                <Th color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  Ar de Lavagem
                </Th>
                <Th color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  Combustão
                </Th>
                <Th color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  Passo do Hélice
                </Th>
                <Th color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  Ar Circulação
                </Th>
                <Th color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  RPM
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {countriesKeys.map((key) =>
                countries[key].ships.map((ship) => {
                  const icon = shipTypes[`type${ship.type}`].img
                  const currentStatus = ship.initialStatus < 9 ? (ship.initialStatus + shipWheel) % 9 : 9

                  let color = 'gray.400'

                  switch (currentStatus) {
                    case 0:
                    case 3:
                    case 4:
                    case 7:
                      color = 'green.400'
                      break
                    case 1:
                    case 2:
                    case 5:
                    case 6:
                      color = 'orange'
                      break
                    case 9:
                    case 10:
                      color = 'red.400'
                      break
                    default:
                      color = 'transparent'
                  }

                  return (
                    <Tr>
                      <Td minWidth={{ sm: '250px' }} ps="0px" borderBottomColor="#56577A">
                        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                          <Box h="22px" w="100px" mr="3">
                            {icon}
                          </Box>
                          <Flex direction="column">
                            <Text fontSize="sm" color="#fff" fontWeight="bold" minWidth="100%">
                              {ship.name}
                            </Text>
                            <Text fontSize="sm" color="gray.400" fontWeight="normal">
                              {countries[key].name}
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td borderBottomColor="#56577A">
                        <Badge
                          bg={color}
                          color={['transparent', 'red.400'].includes(color) ? 'white' : 'gray.700'}
                          fontSize="sm"
                          p="3px 10px"
                          borderRadius="8px"
                          border={color != 'transparent' ? 'none' : '1px solid #fff'}
                          fontWeight="normal"
                        >
                          {shipStatus[currentStatus]}
                        </Badge>
                      </Td>
                      {currentStatus === 9 ? <>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                0
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                Aux: 0
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                0
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                Aux: 0
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                0
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                Aux: 0
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                0
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                Aux: 0
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                0
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                Aux: 0
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                0
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                Aux: 0
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                0
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                Aux: 0
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                0
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                Aux: 0
                              </Text>
                            </Flex>
                          </Td>
                        </> : (
                        <>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                {getRandomArbitrary(0, 1000).toFixed(2)}
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                {`Aux: ${getRandomArbitrary(0, 1000).toFixed(2)}`}
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                {getRandomArbitrary(0, 1000).toFixed(2)}
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                {`Aux: ${getRandomArbitrary(0, 1000).toFixed(2)}`}
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                {getRandomArbitrary(0, 1000).toFixed(2)}
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                {`Aux: ${getRandomArbitrary(0, 1000).toFixed(2)}`}
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                {getRandomArbitrary(0, 1000).toFixed(2)}
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                {`Aux: ${getRandomArbitrary(0, 1000).toFixed(2)}`}
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                {getRandomArbitrary(0, 1000).toFixed(2)}
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                {`Aux: ${getRandomArbitrary(0, 1000).toFixed(2)}`}
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                {getRandomArbitrary(0, 1000).toFixed(2)}
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                {`Aux: ${getRandomArbitrary(0, 1000).toFixed(2)}`}
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                {getRandomArbitrary(0, 1000).toFixed(2)}
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                {`Aux: ${getRandomArbitrary(0, 1000).toFixed(2)}`}
                              </Text>
                            </Flex>
                          </Td>
                          <Td borderBottomColor="#56577A" minW="150px">
                            <Flex direction="column">
                              <Text fontSize="sm" color="#fff" fontWeight="normal">
                                {getRandomArbitrary(0, 1000).toFixed(2)}
                              </Text>
                              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                                {`Aux: ${getRandomArbitrary(0, 1000).toFixed(2)}`}
                              </Text>
                            </Flex>
                          </Td>
                        </>
                      )}
                    </Tr>
                  )
                })
              )}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
      {/* Projects Table */}
      {/*  <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }} pb='0px'>
        <CardHeader p='6px 0px 22px 0px'>
          <Flex direction='column'>
            <Text fontSize='lg' color='#fff' fontWeight='bold' mb='.5rem'>
              Projects Table
            </Text>
            <Flex align='center'>
              <Icon
                as={AiFillCheckCircle}
                color='green.500'
                w='15px'
                h='15px'
                me='5px'
              />
              <Text fontSize='sm' color='gray.400' fontWeight='normal'>
                <Text fontWeight='bold' as='span' color='gray.400'>
                  +30%
                </Text>{" "}
                this month
              </Text>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant='simple' color='#fff'>
            <Thead>
              <Tr my='.8rem' ps='0px'>
                <Th
                  ps='0px'
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Companies
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Budget
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Status
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Completion
                </Th>
                <Th borderBottomColor='#56577A'></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesProjectData.map((row, index, arr) => {
                return (
                  <TablesProjectRow
                    name={row.name}
                    logo={row.logo}
                    status={row.status}
                    budget={row.budget}
                    progression={row.progression}
                    lastItem={index === arr.length - 1 ? true : false}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card> */}
    </Flex>
  )
}

export default Tables
