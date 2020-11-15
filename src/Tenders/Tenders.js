import React from 'react';
import './Tenders.css';

const Tenders = () => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Tenders</th>
                        <th>Last Date</th>
                        <th>Remarka</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-column="S. No.">01</td>
                        <td data-column="Tenders">
                            Tender Notice No: KRIDE/Projects/63/2020 Date:
                            <br />
                            11.11.2020.
                        </td>
                        <td data-column="Last Date"></td>
                        <td data-column="Remarka"></td>
                    </tr>
                    <tr>
                        <td data-column="S. No.">I</td>
                        <td data-column="Tenders">
                            “Manufacturing and Supplying of various Permanent
                            Way PSC Sleepers & Fittings as per relevant RDSO
                            Drawings” for Yesvantpur – Channasandra and
                            Baiyyappanahalli – Hosur Doubling Projects.
                            <br />
                            <br />
                            <ul>
                                <li>
                                    • PSC Mono block wide based Sleepers 60Kg.
                                </li>
                                <hr />
                                <li>
                                    • PSC Sleepers 60Kg for Points & Crossings
                                    1in12 and 1in8 ½.
                                </li>
                                <hr />
                                <li>
                                    • PSC Sleepers 60Kg for LC, Bridge approach,
                                    SEJ, Guard rail and Slack gauge.
                                </li>
                                <hr />
                                <li>
                                    • Fish Bolts & nuts and Spherical plain
                                    washer.
                                </li>
                                <hr />
                                <li>
                                    • Plate Screws, Clamps for joggled fish
                                    plates, CI Bracket, CI distant blocks and
                                    M.S Packing piece.
                                </li>
                            </ul>
                        </td>
                        <td data-column="Last Date">4/12/2020</td>
                        <td data-column="Remarka">OPEN</td>
                    </tr>
                    <tr>
                        <td data-column="S. No.">02</td>
                        <td data-column="Tenders">
                            "Baiyyappanahalli - Hosur Doubling Projects and
                            Yeshwanthpur - Channasandra Doublings Projects".
                            <br />
                            <a href="">
                                Provision of: Signaling Outdoor works with
                                HASSDAC, MSDAC, Integrated power Supply and
                                interlocking of LC Gates in Baiyyappanahalli -
                                Hosur and Yeshwanthpur - Channasandra : Doubling
                                Projects of Bangalore Division in Three (3)
                                Packages" (MULTIPLE PACKAGES)
                            </a>
                            <br />
                            Tender Notice No: K RIDE/Projects/64/2020 Date :13.1
                            1 .2020
                        </td>
                        <td data-column="Last Date">7/12/2020</td>
                        <td data-column="Remarka">OPEN</td>
                    </tr>
                    <tr>
                        <td data-column="S. No.">03</td>
                        <td data-column="Tenders">
                            Tender Notice No. KRIDE/Projects/62/2020 Date:
                            07.11.2020.
                        </td>
                        <td data-column="Last Date"></td>
                        <td data-column="Remarka"></td>
                    </tr>
                    <tr>
                        <td data-column="S. No.">Szabi</td>
                        <td data-column="Tenders">Nagy</td>
                        <td data-column="Last Date">Chief Sandwich Eater</td>
                        <td data-column="Remarka">@szabi</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Tenders;
